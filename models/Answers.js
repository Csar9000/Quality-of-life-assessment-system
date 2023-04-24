const { DataTypes } = require('sequelize')
const db = require('../db.js')

const Answers = db.define("Answers",
  // Описание таблиц
  {
    idAnswer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    idQuestion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    textAnswer: {
        type: DataTypes.TEXT,
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

module.exports = Answers