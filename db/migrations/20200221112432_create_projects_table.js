
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
            tbl.string('description', 256);
            tbl.integer('farm_id')
                // forces integer to be positive
                .unsigned()
                .notNullable()
                .references('id')
                // this table must exist already
                .inTable('farms')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
};
