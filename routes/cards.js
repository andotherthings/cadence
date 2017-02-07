const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.post('/cards', (req, res, next) => {
  const { question, answer, resourceUrl } = req.body;

  knex('cards')
  .insert(decamelizeKeys({ question, answer, resourceUrl }), '*')
  .then((newCard) => {
    res.send(camelizeKeys(newCard));
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/cards/:id', (req, res, next) => {
  const { id } = req.params;

  knex('cards')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      res.status(400).send('No card found');
    }

    res.send(camelizeKeys(row));
  })
  .catch((err) => {
    next(err);
  });
});

router.patch('/cards/:id', (req, res, next) => {
  const { id } = req.params;

  knex('cards')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      res.status(400).send('No card found');
    }

    const updateRow = {};

    for (let key in req.body) {
      if (['question', 'answer', 'resourceUrl'].indexOf(key) !== -1) {
        updateRow[key] = req.body[key];
      }
    }

    knex('cards')
    .where('id', id)
    .update(decamelizeKeys(updateRow), '*')
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

router.delete('/cards/:id', (req, res, next) => {
  const { id } = req.params;

  knex('cards')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      res.status(400).send('No card found');
    }

    knex('cards')
    .where('id', id)
    .del()
    .returning('*')
    .then((deletedRow) => {
      res.send(camelizeKeys(deletedRow));
    });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
