const router = require('express').Router()
const { loginUser, getUserData, getWeather } = require('../controllers/index_controller')

router.post('/login', loginUser)

router.get('/weather', getWeather)

router.get('/user/:id', getUserData)

module.exports = router
