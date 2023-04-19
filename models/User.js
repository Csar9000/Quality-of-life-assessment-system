const { DataTypes } = require('sequelize')
const db = require('../db.js')

const User = db.define("public.User",
  // Описание таблиц
  {
    codeUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    idDepartment: {
        type: DataTypes.INTEGER,
      allowNull: false
    },
    ageCategory: {
        type: DataTypes.STRING(100),
      allowNull: false,
    },
    workStageCategory: {
        type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
        type: DataTypes.STRING(50),
      allowNull: false
    },
    post: {
        type: DataTypes.STRING(150),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(300),
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

module.exports = User