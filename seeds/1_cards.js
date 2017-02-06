/* eslint-disable max-len, camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('cards').del()
    .then(() => {
      return knex('cards').insert([{
        id: 1,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 5,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 6,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 7,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 8,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 9,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 10,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 11,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 12,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 13,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 14,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 15,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 16,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 17,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 18,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 19,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 20,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 21,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 22,
        question: "test",
        answer: "test",
        resource_url: "test",
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cards_id_seq', (SELECT MAX(id) FROM cards));"
      );
    });
};
