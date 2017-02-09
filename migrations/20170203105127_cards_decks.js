exports.up = knex => {
  return knex.schema.createTable('cards_decks', table => {
    table.increments();
    table.integer('deck_id')
      .notNullable()
      .references('id')
      .inTable('decks')
      .onDelete('CASCADE')
      .index();
    table.integer('card_id')
      .notNullable()
      .references('id')
      .inTable('cards')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('cards_decks');
};
