const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = async ({name, description, project_id}) => {
    console.log('postResources invoked')
    try {
        const [id] = await db('resources').insert({name, description})

        const newResource = await db('resources')
            .select('*')
            .where({ id })

        await db('proj_to_resource').insert(
            {
                project_id,
                resource_id: id
            }
        )

        console.log('newResource', newResource)
        return newResource
    } catch (e) {
        console.log(e)
        return e
    }
}