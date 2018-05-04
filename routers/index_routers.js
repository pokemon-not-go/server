const router = require('express').Router()
const { loginUser } = require('../controllers/index_controller')

router.post('/login', loginUser)

module.exports = router
