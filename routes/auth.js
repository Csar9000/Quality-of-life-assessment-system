const Router  = require('express')
const router = new Router()
const auth = require('../controllers/auth')

router.post('/login',auth.login)
router.post('/register',auth.register)


module.exports = router