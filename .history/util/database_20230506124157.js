const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('node-complete', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});