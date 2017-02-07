const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
const compiler = webpack(config);

const cards = require('./routes/cards');
const decks = require('./routes/decks');
const cardsDecks = require('./routes/cards_decks');

app.use(bodyParser.json());
app.use(cards);
app.use(decks);
app.use(cardsDecks);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  /* eslint-disable no-console */

  console.log('on some port');
});
