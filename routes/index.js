const express = require('express');
const path = require('path');
const cards = require('./cards');
const decks = require('./decks');

const router = express.Router();

router.use('/cards', cards);
router.use('/decks', decks);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;
