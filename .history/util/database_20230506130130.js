const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Taha7008', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

module