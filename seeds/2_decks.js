/* eslint-disable max-len, camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('decks').del()
    .then(() => {
      return knex('decks').insert([{
        id: 1,
        topic: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        topic: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        topic: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('decks_id_seq', (SELECT MAX(id) FROM decks));"
      );
    });
};
