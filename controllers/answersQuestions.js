const sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const db = require('../db')
const answers = require('../models/Answers')
const questions = require('../models/Question')
const config = require('../config/db.config')
const { password } = require('../config/db.config')
const Factor = require('../models/Factors')

class AnswerQuestionController{
    async getQuestions(req, res){
      await db.query('select getQuestionsAnswers();',{plain: true,raw: true}).then(function(response) {
        var data = JSON.parse(JSON.stringify(response));
        data = data[ 'getquestionsanswers' ];
        data = JSON.stringify(data);
        res.json(data);
      });
    }

    async getFactors(req,res){
      const factors = await Factor.findAll()
      res.json(factors);
    }
}


module.exports = new AnswerQuestionController()