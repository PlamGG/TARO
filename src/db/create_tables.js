const knex = require('./knex');

async function createTables() {
  console.log('Starting table creation...');
  try {
    console.log('Creating users table...');
    await knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
    });
    console.log('Users table created.');

    console.log('Creating readings table...');
    await knex.schema.createTable('readings', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('reading_type');
      table.string('reading_frequency');
      table.integer('card_spread');
      table.json('cards');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
    console.log('Readings table created.');

    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    console.log('Closing database connection...');
    await knex.destroy();
    console.log('Database connection closed.');
  }
}

createTables();
