const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async () => {
    console.log('getProjects invoked')
    try {
        const projects = await db('projects').select('*')
        console.log('projects', projects)
        return projects
    } catch (e) {
        return e
    }
}