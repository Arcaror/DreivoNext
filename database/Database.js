const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:boosqllol@localhost:5432/predictor')

  

try {
    sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }
 
module.exports = sequelize  