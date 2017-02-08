exports.seed = knex => {
  return knex('decks').del()
    .then(() => {
      return knex('decks').insert([{
        id: 1,
        topic: 'Promises & Asynchronous Programming',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 2,
        topic: 'Fundamentals',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 3,
        topic: 'HTTP',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }]);
    })
    .then(() => {
      knex.raw('SELECT setval(\'decks_id_seq\', (SELECT MAX(id) FROM decks));');
    });
};
