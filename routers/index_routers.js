const router = require('express').Router()
const { loginUser, getWeather, catchPokemon } = require('../controllers/index_controller')

router.post('/login', loginUser)

router.post('/weather', getWeather)

router.put('/catch', catchPokemon)

module.exports = router
