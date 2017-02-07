const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/', (req, res, next) => {
  knex('decks')
    .then(decks => {
      res.send(decks);
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  knex('decks')
    .where('id', id)
    .first()
    .then(deck => {
      if (!deck) {
        res.status(400).send('No deck found');
      }

      res.send(deck);
    })
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { topic } = req.body;

  knex('decks')
    .insert({ topic }, '*')
    .then(newDeck => {
      res.send(newDeck);
    })
    .catch(err => next(err));
});

router.patch('/:id', (req, res, next) => {
  const { id } = req.params;

  knex('decks')
    .where('id', id)
    .first()
    .then(deck => {
      if (!deck) {
        res.status(400).send('No deck found');
      }

      const updateDeck = {};

      if (req.body.topic) {
        updateDeck.topic = req.body.topic;
      }

      knex('decks')
        .where('id', id)
        .update(updateDeck, '*')
        .then(updatedDeck => {
          res.send(updatedDeck);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  knex('decks')
    .where('id', id)
    .first()
    .then(deck => {
      if (!deck) {
        res.status(400).send('No deck found');
      }

      knex('decks')
        .where('id', id)
        .del()
        .returning('*')
        .then(deletedDeck => {
          res.send(deletedDeck);
        });
    })
    .catch(err => next(err));
});

module.exports = router;
