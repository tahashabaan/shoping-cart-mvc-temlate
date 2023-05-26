const Sequelize = require('sequelize');

exports.sequelize = new Sequelize('node-complete', 'root', 'Taha7008', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

