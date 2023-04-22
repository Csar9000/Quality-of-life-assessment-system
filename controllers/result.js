const sequelize = require('sequelize')
const db = require('../db')
const Result = require('../models/result')

class ResultController{
    async createResult(req, res){
      
      const result = await Result.create({
          codeUser: 12,
          idAnswer: req.body.idAnswer,
          idFactor:req.body.idFactor,
          idTesting: 1
      })
      res.json(result)
    }
    async getResults(req, res){
        const result = await Result.findAll({})
        res.json(result)
    }

    async getRes(req,res){
     await db.query('call get_temp_result_table(1);');
     await db.query('SELECT "main_function"(1);',{plain: true,raw: true}).then(function(response) {
        var data = JSON.parse(JSON.stringify(response));
        //console.log(Object.keys(data['main_function']))
        //console.log(Object.entries(data))
        res.json(data[ 'main_function' ]);
      });
    }
}
module.exports = new ResultController()