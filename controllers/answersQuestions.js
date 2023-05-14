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

    async getQuestionsByIdTesting(req, res){
      var idTest = Number(req.body.idTest)
      await db.query(`select getquestionsanswersByIdTesting(${idTest});`,{plain: true,raw: true}).then(function(response) {
        var data = JSON.parse(JSON.stringify(response));
        data = data[ 'getquestionsanswersbyidtesting' ];
        data = JSON.stringify(data);
        res.json(data);
      });
    }

    async addQuestionToTest(req, res){
      var idQuestion = Number(req.body.idQuestion)
      var idTest = Number(req.body.idTest)
      
      await db.query(`INSERT INTO public."public.QuestionsInTests"("idQuestion", "idTest") VALUES (${idQuestion}, ${idTest});`,{ raw: true,type: sequelize.QueryTypes.INSERT}).then(function(response) {
        res.json(response);
      });
    }

    async getTestings(req, res){
      var query = 'SELECT a."idTest",c."idDepartment", c."departmentNum", b."testName", a."dateNotificationDate", a."datePassingTest", b."testCreatingDate" FROM public."public.TestingDepartments" a LEFT JOIN public."public.Tests" b ON b."idTest" = a."idTest" LEFT JOIN public."public.Department" c ON c."idDepartment" = a."idDepartment"'
      await db.query( query,{ raw: true,type: sequelize.QueryTypes.SELECT}).then(function(response) {
        var data = JSON.stringify(response);
        res.json(data);
      });
    }
    
    async getFactors(req,res){
      const factors = await Factor.findAll()
      res.json(factors);
    }

    async getQuestionsInTest(req,res){
      var query = `SELECT b."idQuestion", b."textQuestion", b."typeQuestion", count(distinct(d."idAnswer")), STRING_AGG(distinct(e."nameFactor"), ', ') FROM
        public."public.QuestionsInTests" a
      INNER JOIN public."Questions" b ON b."idQuestion" = a."idQuestion"
      INNER JOIN public."Answers" c ON c."idQuestion" = a."idQuestion"
      INNER JOIN public."public.FactorsInAnswers" d ON c."idAnswer" = d."idAnswer"
      INNER JOIN public."public.Factors" e ON d."idFactor" = e."idFactor"
      where a."idTest" = ${Number(req.body.idQuestion)}
      group by  b."idQuestion", b."textQuestion"`
      await db.query( query,{ raw: true,type: sequelize.QueryTypes.SELECT}).then(function(response) {
        var data = JSON.stringify(response);
        res.json(response);
      });

    }


    async getQuestionData(req,res){
      var query = `SELECT a."idQuestion", a."textQuestion", a."typeQuestion",c.weight,c."idFactor", b."idAnswer", b."textAnswer", d."nameFactor"
      FROM
        public."Questions" a
      INNER JOIN public."Answers" b ON a."idQuestion" = b."idQuestion"
      INNER JOIN public."public.FactorsInAnswers" c ON c."idAnswer" = b."idAnswer"
      INNER JOIN public."public.Factors" d ON d."idFactor" = c."idFactor"
      where a."idQuestion" = ${Number(req.body.idQuestion)}
      group by  a."idQuestion", b."idAnswer", b."textAnswer",c.weight, d."nameFactor",c."idFactor"`
    await db.query( query,{ raw: true,type: sequelize.QueryTypes.SELECT}).then(function(response) {
      var data = JSON.stringify(response);
      res.json(response);
    });
    }

    async updateQuestion(req, res){

      var idQuestion = Number(req.body.idQuestion)
      var query = `DELETE FROM public."Questions"
      WHERE "idQuestion" = ${idQuestion};`
      var answers = req.body.answers
      await db.query( query,{ raw: true,type: sequelize.QueryTypes.DELETE})
      
        
      const result = await Question.create({
        idQuestion: idQuestion,
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

    async createQuestion(req, res){
      
      var answers = req.body.answers
      var save = Number(req.body.save)
      var idTest = Number(req.body.idTest)
      
      if(save == 0){
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
      }else{
        var savedIdQuestion
        const result = await Question.create({
          textQuestion: req.body.textQuestion,
          typeQuestion: req.body.typeQuestion
        }).then(question=>{
          savedIdQuestion = question.idQuestion
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
        db.query(`INSERT INTO public."public.QuestionsInTests"("idQuestion", "idTest") VALUES (${savedIdQuestion}, ${idTest});`)

      }
      
    }
}


module.exports = new AnswerQuestionController()