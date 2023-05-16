const sequelize = require('sequelize')
const db = require('../db')
const Result = require('../models/result')

class ResultController{
    async createResult(req, res){
      
      const result = await Result.create({
          codeUser: 15,
          idAnswer: req.body.idAnswer,
          idFactor: req.body.idFactor,
          idTesting: 1
      })
      res.json(result)
    }
    async getResults(req, res){
        const result = await Result.findAll({})
        res.json(result)
    }

   async getRes(req,res){
    var idTest = Number(req.body.idTest)
   // db.query(`call get_temp_result_table(${idTest});`);
    db.query(`SELECT "test_func"(${idTest});`,{plain: true,raw: true}).then(function(response) {
        var data = JSON.parse(JSON.stringify(response));
        //console.log(Object.keys(data['main_function']))
        //console.log(data)
        res.json(data[ 'test_func' ]);
      });
    }

    async getPassingTestOrderByIdTestAndIdDepartment(req,res){
      var idTest = Number(req.body.idTest)
      var idDepartment = Number(req.body.idDepartment)
      var query = `SELECT distinct(a."codeUser"), case when 
      (a."codeUser" NOT IN (
          SELECT "codeUser"
          FROM public."public.Result" d
        )
      ) THEN 'Не пройден'
      when (a."codeUser"  IN (
          SELECT "codeUser"
          FROM public."public.Result" d
        )
      ) THEN 'Пройден'
      else 'ХЗ ваще'
             end as passing_check,
           b."departmentNum",
           e."testName"
      FROM
        public."public.User" a, public."public.Department" b, public."public.TestingDepartments" c, public."public.Tests" e
        where a."idDepartment" = b."idDepartment" and b."idDepartment" = c."idDepartment" and c."idTest" = ${idTest} and c."idTest" = e."idTest" and b."idDepartment" = ${idDepartment}`


        
        db.query(query,{type: sequelize.QueryTypes.SELECT}).then(function(response) {
          console.log(response)
          res.json(response);
        });
    }


}
module.exports = new ResultController()