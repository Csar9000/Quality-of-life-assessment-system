const { DataTypes } = require('sequelize')
const db = require('../db.js')

const FactorsInAnswers = db.define("public.FactorsInAnswers",
  // Описание таблиц
  {
    idAnswer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    idFactor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
  },
  // Опции
  {
    freezeTableName: true,
    createdAt: false,
    schema:'public',
    timestamps: false
  }
)

module.exports = FactorsInAnswers