exports.up = knex => {
  return knex.schema.createTable('decks', table => {
    table.increments();
    table.string('topic').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('decks');
};
