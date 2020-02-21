
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: "get hay",
          id: 1,
          project_id: 1,
          notes: "drying grass",
          completed: false
        },
        {
          id: 2,
          description: 'get shocky stick',
          project_id: 1,
          notes: "need to hurt elephants",
          completed: true
        },
        {
          id: 3,
          description: 'learn to ride elephant',
          project_id: 1,
          notes: "like a horse but bigger, protect ya neck",
          completed: true
        },
        {
          id: 4,
          project_id: 2,
          description: 'lala',
          completed: false
        },
      ]);
    });
};
