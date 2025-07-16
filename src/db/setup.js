const knex = require('./knex');

async function setup() {
  try {
    await knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
    });

    await knex.schema.createTable('readings', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('reading_type');
      table.string('reading_frequency');
      table.integer('card_spread');
      table.json('cards');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });

    console.log('Database setup complete!');
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await knex.destroy();
    process.exit(0);
  }
}

setup();
