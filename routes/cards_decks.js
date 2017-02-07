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
  .catch((err) => next(err));
});

router.get('/cards_decks', (req, res, next) => {
  const { deckId } = req.body;

  knex('cards_decks')
  .where('deck_id', deckId)
  .join('decks', 'decks.id', 'deck_id')
  .join('cards', 'cards.id', 'card_id')
  .then((deck) => {
    res.send(camelizeKeys(deck));
  })
  .catch((err) => next(err))
});

module.exports = router;
