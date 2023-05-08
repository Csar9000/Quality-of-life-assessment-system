const sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const db = require('../db')
const answers = require('../models/Answers')
const questions = require('../models/Question')
const config = require('../config/db.config')
const { password } = require('../config/db.config')
const Factor = require('../models/Factors')
const FactorInAnswer = require('../models/FactorsInAnswers')
const Question = require('../models/Question')
const Answers = require('../models/Answers')


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

    async createQuestion(req, res){
      
      var answers = req.body.answers
        

      const result = await Question.create({
        textQuestion: req.body.textQuestion,
        typeQuestion: req.body.typeQuestion
      }).then(question=>{
         answers.forEach(element => {
          Answers.create({
            idQuestion: question.idQuestion,
            textAnswer: element.textAnswer
        }).then(answer=>{
          var el = JSON.stringify(element.factor)
          var e = JSON.parse(el)
          e.forEach(element => {
            FactorInAnswer.create({
              idAnswer: answer.idAnswer,
              idFactor: element.idFactor,
              weight: element.weight
            })
          });
          
        })
        
        })
      })
      res.json(result)
    }
}


module.exports = new AnswerQuestionController()