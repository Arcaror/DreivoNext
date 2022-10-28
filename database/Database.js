const Sequelize = require('sequelize');

const sql_user = process.env.SQL_USER
const sql_pass = process.env.SQL_PASS
const sql_db = process.env.SQL_DB
const sequelize = new Sequelize(`mysql://${sql_user}:${sql_pass}@localhost:3306/${sql_db}`)



try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize  
