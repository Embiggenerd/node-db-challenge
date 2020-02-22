const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = async () => {
    try {
        const projects = await db('projects').select('*')
        for(let i = 0; i < projects.length; i++){
            projects[i].completed = Boolean(projects[i].completed)
        }
        return projects
    } catch (e) {
        return e
    }
}