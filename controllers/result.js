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

    async getPersonalOrder(req, res){
      var codeUser = Number(req.body.codeUser)

      var query = `SELECT c."mainFactor", round(sum(b.weight)*100.0/sum(case when b.weight >= 0 then b.weight end),2) as sum
      FROM
        public."public.Result" a
      LEFT JOIN public."public.FactorsInAnswers" b ON b."idFactor" = a."idFactor" and b."idAnswer"= a."idAnswer"
      LEFT JOIN public."public.Factors" c ON b."idFactor" = c."idFactor" 
      where a."codeUser"= ${codeUser}
      GROUP BY c."mainFactor"`
      db.query(query,{type: sequelize.QueryTypes.SELECT}).then(function(response) {
        res.json(response);
      });

    }


}
module.exports = new ResultController()