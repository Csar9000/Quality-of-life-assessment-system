const sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const db = require('../db')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const config = require('../config/db.config')
const { password } = require('../config/db.config')

class UserController{
    async login(req, res){
      
      const user = await User.findOne({where: {codeUser: req.body.codeUser}})

      if(user) {
        const passwordResult = bcrypt.compareSync(req.body.password, user.password)
        if (passwordResult){
            const token = jwt.sign({
                codeUser: user.codeUser
            }, config.jwt, {expiresIn: 60*60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        }else{
            res.status(401).json({
                message: 'Пароли не совпали. Попробуйте снова'
            })
        }
      }else{
        res.status(404).json({
            message: 'Пользователь с таким номером сотрудника не найден'
        })
      }
    }
    async register(req, res){
        const user = await User.findOne({where: {codeUser: req.body.codeUser}})
        if(user) {
            if(user.ageCategory == null){
                try{
                    const salt = bcrypt.genSaltSync(10)
                    const password = req.body.password
                    const user = await User.update ({
                        idDepartment: req.body.idDepartment,
                        ageCategory: req.body.ageCategory,
                        workStageCategory: req.body.workStageCategory,
                        gender: req.body.gender,
                        post:req.body.post,
                        password:bcrypt.hashSync(password, salt)
                    },{
                        where: {
                            codeUser: req.body.codeUser,
                        }
                      })
        
                    res.status(201).json(user)
                }catch(e){
    
                }
            }
            else{
                res.status(409).json({
                    message: 'Вы уже зарегистрированы'
                })
            }

        }else{
            res.status(409).json({
                message: 'Вашего номера нет в системе'
            })
        }
    }
}


module.exports = new UserController()