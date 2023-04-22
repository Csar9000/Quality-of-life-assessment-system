const Router  = require('express')
const router = new Router()
const resultController = require('../controllers/result')
const passport = require('passport')


router.post('/createResult',resultController.createResult)
router.get('/result', passport.authenticate('jwt', {session:false}),resultController.getResults)
router.get('/getResult',resultController.getRes)


module.exports = router