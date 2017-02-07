const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/', (req, res, next) => {
  knex('cards')
    .then(cards => {
      res.send(cards);
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  knex('cards')
    .where('id', id)
    .first()
    .then(card => {
      if (!card) {
        res.status(400).send('No card found');
      }

      res.send(camelizeKeys(card));
    })
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { question, answer, resourceUrl } = req.body;

  knex('cards')
    .insert(decamelizeKeys({ question, answer, resourceUrl }), '*')
    .then(newCard => {
      res.send(camelizeKeys(newCard));
    })
    .catch(err => next(err));
});

router.patch('/:id', (req, res, next) => {
  const { id } = req.params;

  knex('cards')
    .where('id', id)
    .first()
    .then(card => {
      if (!card) {
        res.status(400).send('No card found');
      }

      const updateCard = {};

      Object.keys(req.body).forEach(key => {
        if (['question', 'answer', 'resourceUrl'].indexOf(key) !== -1) {
          updateCard[key] = req.body[key];
        }
      });

      knex('cards')
      .where('id', id)
      .update(decamelizeKeys(updateCard), '*')
      .then(updatedCard => {
        res.send(updatedCard);
      })
      .catch(err => next(err));
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  knex('cards')
    .where('id', id)
    .first()
    .then(card => {
      if (!card) {
        res.status(400).send('No card found');
      }

      knex('cards')
      .where('id', id)
      .del()
      .returning('*')
      .then(deletedCard => {
        res.send(camelizeKeys(deletedCard));
      });
    })
    .catch(err => next(err));
});

module.exports = router;
