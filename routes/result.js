const Router  = require('express')
const router = new Router()
const resultController = require('../controllers/result')
const passport = require('passport')
const answersQuestions = require('../controllers/answersQuestions')


router.post('/createResult',resultController.createResult)
router.get('/result', passport.authenticate('jwt', {session:false}),resultController.getResults)
router.post('/getResult',resultController.getRes)
router.get('/getQuestions', answersQuestions.getQuestions)

router.get('/getFactors', answersQuestions.getFactors)
router.post('/createQuestion', answersQuestions.createQuestion)
router.post('/updateQuestion', answersQuestions.updateQuestion)
router.get('/getTestings', answersQuestions.getTestings)
router.post('/getQuestionsInTest', answersQuestions.getQuestionsInTest)
router.post('/getQuestionData', answersQuestions.getQuestionData)

router.post('/addQuestionToTest', answersQuestions.addQuestionToTest)

router.post('/getPassingTestOrderByIdTestAndIdDepartment', resultController.getPassingTestOrderByIdTestAndIdDepartment)

module.exports = router