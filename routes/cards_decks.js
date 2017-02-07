const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.post('/cards_decks', (req, res, next) => {
  const { deckId, cardId } = req.body;

  knex('cards_decks')
  .insert(decamelizeKeys({ deckId, cardId }), '*')
  .then((newCardDeck) => {
    res.send(newCardDeck);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
