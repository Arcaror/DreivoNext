const { DataTypes, Model } = require('sequelize');

const sequelize = require('/database/Database')

const Players = sequelize.define('players', {
  // Model attributes are defined here

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  idGoogle: {
    type: DataTypes.STRING

  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  image: {
    type: DataTypes.STRING
  },
  winstreak: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  isAdmin: {
    type: DataTypes.INTEGER
  }
}, {
  uniqueKeys: {
    actions_unique: {
      fields: ['id']
    }
  },
  // Other model options go   
  sequelize, // We need to pass the connection instance
  modelName: 'Players' // We need to choose the model name
});

// the defined model is the class itself
console.log(Players === sequelize.models.Players); // true

module.exports = Players 
