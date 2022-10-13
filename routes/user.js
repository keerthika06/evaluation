const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authenticate = require('../middleware/authenticate')

router.get('/', authenticate, userController.index)
router.post('/show',userController.show)
router.post('/store',userController.store)
router.post('/update',userController.update)

module.exports = router