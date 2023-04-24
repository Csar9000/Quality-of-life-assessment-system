const sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const db = require('../db')
const answers = require('../models/Answers')
const questions = require('../models/Question')
const config = require('../config/db.config')
const { password } = require('../config/db.config')

class AnswerQuestionController{
    async getQuestions(req, res){
      
      const answers = await db.query('select getQuestionsAnswers();',{plain: true,raw: true});

    res.status(200).json(answers)
    }
}


module.exports = new AnswerQuestionController()