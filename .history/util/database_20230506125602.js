const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

module.exports = 