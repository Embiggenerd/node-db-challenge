const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async (project) => {
    console.log('postProjects invoked')
    try {
        const [id] = await db('projects').insert(project)
        
        const newProject = await db('projects')
            .select('*')
            .where({ id })

        console.log('newProject', newProject)
        return newProject
    } catch (e) {
        console.log(e)
        return e
    }
}