const routes = require('express').Router()
const { getWeather } = require('../controllers/get.weather')

routes.get('/weather', getWeather)

module.exports = routes
