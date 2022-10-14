const express = require('express')
const { reset } = require('nodemon')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register',AuthController.register)
router.post('/login',AuthController.login)
router.post('/refresh-token', AuthController.refreshToken)

// forgot password
//password- rest
// router.post('/password-reset',AuthController.password-reset)
// router.post('/password-reset/:MobileNumber/:token')




module.exports = router