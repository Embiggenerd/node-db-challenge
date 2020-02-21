
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'hay', description: "dried grass, takes time and money"},
        {id: 2, name: 'money', description: "the most expensive part"},
        {id: 3, name: 'shocky stick', description: "for hurting large things"}
      ]);
    });
};
