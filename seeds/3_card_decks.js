exports.seed = function (knex) {
  return knex('cards_decks').del()
    .then(() => {
      return knex('cards_decks').insert([{
        id: 1,
        deck_id: 1,
        card_id: 1,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 2,
        deck_id: 1,
        card_id: 2,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 3,
        deck_id: 1,
        card_id: 3,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 4,
        deck_id: 1,
        card_id: 4,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 5,
        deck_id: 1,
        card_id: 5,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 6,
        deck_id: 1,
        card_id: 6,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 7,
        deck_id: 1,
        card_id: 7,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 8,
        deck_id: 2,
        card_id: 8,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 9,
        deck_id: 2,
        card_id: 9,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 10,
        deck_id: 2,
        card_id: 10,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 11,
        deck_id: 2,
        card_id: 11,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 12,
        deck_id: 2,
        card_id: 12,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 13,
        deck_id: 2,
        card_id: 13,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 14,
        deck_id: 2,
        card_id: 14,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 15,
        deck_id: 2,
        card_id: 15,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 16,
        deck_id: 3,
        card_id: 16,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 17,
        deck_id: 3,
        card_id: 17,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 18,
        deck_id: 3,
        card_id: 18,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 19,
        deck_id: 3,
        card_id: 19,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 20,
        deck_id: 3,
        card_id: 20,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 21,
        deck_id: 3,
        card_id: 21,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 22,
        deck_id: 3,
        card_id: 22,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }]);
    })
    .then(() => {
      return knex.raw('SELECT setval(\'cards_decks_id_seq\', (SELECT MAX(id) FROM cards_decks));');
    });
};
