
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl.text('name', 128)
                .notNullable();

            tbl.text('description')

            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })

        .createTable('tasks', tbl => {
            tbl.increments();

            tbl.string('description', 256)
                .notNullable()

            tbl.string('notes', 256)

            tbl.boolean('completed')
                .defaultTo(false)
                .notNullable()

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
        })

        .createTable('resources', tbl => {
            tbl.increments()

            tbl.string('name', 128)
                .notNullable()
                .unique()

            tbl.string('description', 256)
        })

        .createTable('proj_to_resource', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')

            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')

            tbl.primary(['project_id', 'resource_id']);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('proj_to_resource')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
