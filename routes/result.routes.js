const Router  = require('express')
const router = new Router()
const resultController = require('../controllers/result.controller')
const passport = require('passport')
const Excel = require('exceljs');

router.post('/createResult',resultController.createResult)
router.get('/result', passport.authenticate('jwt', {session:false}),resultController.getResults)
router.get('/getResult',resultController.getRes)


module.exports = router