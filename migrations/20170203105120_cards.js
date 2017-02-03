'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments();
    table.string('question').notNullable();
    table.string('answer').notNullable();
    table.string('resource_url').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards');
};
