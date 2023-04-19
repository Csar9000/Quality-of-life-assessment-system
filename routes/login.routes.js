const Router  = require('express')
const router = new Router()
const auth = require('../controllers/auth')
const Excel = require('exceljs');

router.post('/login',auth.login)
router.post('/register',auth.register)


module.exports = router