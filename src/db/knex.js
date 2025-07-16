const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './tarot.sqlite',
  },
  useNullAsDefault: true,
});

module.exports = knex;
