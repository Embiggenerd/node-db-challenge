const knex = require('knex');
const cache = require('../notificationsCache')
const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async (task) => {
    console.log('posttasks invoked')
    try {
        const [id] = await db('tasks').insert(task)

        const [newTask] = await db('tasks')
            .select('*')
            .where({ id })

        newTask.completed = Boolean(task.completed)
        cache.setTasks(newTask)
        console.log('afterTask', cache)
        return newTask
    } catch (e) {
        console.log(e)
        return e
    }
}