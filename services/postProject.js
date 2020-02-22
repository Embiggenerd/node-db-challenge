const knex = require('knex');

const config = require('../knexfile.js');
const cache = require('../notificationsCache')

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async (project) => {
    try {
        const [id] = await db('projects').insert(project)
        const [newProject] = await db('projects')
            .select('*')
            .where({ id })

        newProject.completed = Boolean(newProject.completed)
        cache.setProjects(newProject)
        return newProject
    } catch (e) {
        console.log(e)
        return e
    }
}