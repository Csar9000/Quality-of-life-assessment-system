const { DataTypes } = require('sequelize')
const db = require('../db.js')

const Factors = db.define("public.Factors",
  // Описание таблиц
  {
    idFactor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    mainFactor: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nameFactor: {
        type: DataTypes.STRING(100),
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

module.exports = Factors