const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.post('/decks', (req, res, next) => {
  const { topic } = req.body;

  knex('decks')
  .insert({ topic }, '*')
  .then((newCard) => {
    res.send(newCard);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/decks/:id', (req, res, next) => {
  const { id } = req.params;

  knex('decks')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      res.status(400).send('No deck found');
    }

    res.send(row);
  })
  .catch((err) => {
    next(err);
  });
});

router.patch('/decks/:id', (req, res, next) => {
  const { id } = req.params;

  knex('decks')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      res.status(400).send('No deck found');
    }

    const updateRow = {};

    if (req.body.topic) {
      updateRow.topic = req.body.topic;
    }

    knex('decks')
    .where('id', id)
    .update(updateRow, '*')
    .then((updatedRow) => {
      res.send(updatedRow);
    })
    .catch((err) => {
      next(err);
    });
  })
  .catch((err) => {
    next(err);
  });
});

router.delete('/decks/:id', (req, res, next) => {
  const { id } = req.params;

  knex('decks')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      res.status(400).send('No deck found');
    }

    knex('decks')
    .where('id', id)
    .del()
    .returning('*')
    .then((deletedRow) => {
      res.send(deletedRow);
    });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
