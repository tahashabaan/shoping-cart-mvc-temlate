/* eslint-disable node/no-extraneous-require */
const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('node-complete', 'root', 'Taha7008', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

module.exports= sequelize;