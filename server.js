const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8008;
const compiler = webpack(config);

const routes = require('./routes/index');

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', routes);

app.listen(port, () => {
  /* eslint-disable no-console */

  console.log(`Application running at http://localhost:${port}`);
});
