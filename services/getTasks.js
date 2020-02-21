const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async () => {
    console.log('gettasks invoked')
    try {
        const tasks = await db('tasks').select('*')
        console.log('tasks', tasks)
        return tasks
    } catch (e) {
        return e
    }
}