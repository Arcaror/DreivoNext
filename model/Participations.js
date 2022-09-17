const { DataTypes, Model } = require('sequelize');

const sequelize = require('/database/Database')

const Participations = sequelize.define('participations', {
  // Model attributes are defined here

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  userId: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  response:{
    type: DataTypes.STRING
  },
  prediId: {
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
  modelName: 'Participations' // We need to choose the model name
});

// the defined model is the class itself
console.log(Participations === sequelize.models.Participations); // true

module.exports = Participations 
