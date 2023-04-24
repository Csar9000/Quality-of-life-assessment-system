const { DataTypes } = require('sequelize')
const db = require('../db.js')

const Questions = db.define("Questions",
  // Описание таблиц
  {
    idQuestion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    textQuestion: {
        type: DataTypes.TEXT,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    typeQuestion: {
        type: DataTypes.INTEGER,
      allowNull: false,
    }
    
  },
  // Опции
  {
    freezeTableName: true,
    createdAt: false,
    schema:'public',
    timestamps: false
  }
)

module.exports = Questions