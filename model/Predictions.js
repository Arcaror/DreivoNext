const { DataTypes, Model } = require('sequelize');

const sequelize = require('/database/Database')

const Predictions = sequelize.define('predictions', {
  // Model attributes are defined here

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  name: {
    type: DataTypes.STRING
  },
  end: {
    type: DataTypes.STRING
  },

}, {
  uniqueKeys: {
    actions_unique: {
      fields: ['id']
    }
  },
  // Other model options go   
  sequelize, // We need to pass the connection instance
  modelName: 'Predictions' // We need to choose the model name
});

// the defined model is the class itself
console.log(Predictions === sequelize.models.Predictions); // true

module.exports = Predictions 
