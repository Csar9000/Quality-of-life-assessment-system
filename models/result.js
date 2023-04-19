// Db
const { DataTypes } = require('sequelize')
const db = require('../db.js')

const Result = db.define("public.Result",
  // Описание таблиц
  {
    idResult: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    codeUser: {
        type: DataTypes.INTEGER,
      allowNull: false
    },
    idAnswer: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    idFactor: {
        type: DataTypes.INTEGER,
      allowNull: false
    },
    idTesting: {
        type: DataTypes.INTEGER,
      allowNull: false
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

module.exports = Result