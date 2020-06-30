const { Router } = require('express')
const cloudinery = require('../controllers/cloudinery.controller.js')
const router = Router()
router.post('/cloudinery', cloudinery)

module.exports = router
