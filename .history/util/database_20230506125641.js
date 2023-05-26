const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-comple', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

module.exports = sequelize;