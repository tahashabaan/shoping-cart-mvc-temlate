const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Taha', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

module.exports = sequelize;