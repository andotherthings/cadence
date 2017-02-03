'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/cadence_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/cadence_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
