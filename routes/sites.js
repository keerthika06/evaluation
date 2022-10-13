const express = require('express')
const router = express.Router()

router.get('/', authenticate, siteController.index)
router.post('/show',siteController.show)
router.post('/store',siteController.store)
router.post('/update',siteController.update)

module.exports = router