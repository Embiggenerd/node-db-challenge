const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async (task) => {
    console.log('posttasks invoked')
    try {
        const [id] = await db('tasks').insert(task)
        
        const newTask = await db('tasks')
            .select('*')
            .where({ id })

        console.log('newTask', newTask)
        return newTask
    } catch (e) {
        console.log(e)
        return e
    }
}