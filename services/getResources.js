const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async () => {
    console.log('getresources invoked')
    try {
        const resources = await db('resources').select('*')
        console.log('resources', resources)
        return resources
    } catch (e) {
        return e
    }
}