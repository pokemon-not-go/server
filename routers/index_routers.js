const router = require('express').Router()
const { loginUser, getWeather, getUserData } = require('../controllers/index_controller')

router.post('/login', loginUser)

router.post('/weather', getWeather)

router.get('/user/:id', getUserData)

module.exports = router
