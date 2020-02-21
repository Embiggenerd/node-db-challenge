
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Raise elephants', description: 'lala', completed: false },
        { id: 2, name: 'Solve world hunger', description: 'lolo', completed: true },
        { id: 3, name: 'World Peace', description: 'hehe', completed: false },
      ]);
    });
};
