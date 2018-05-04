const router = require('express').Router()
const { getPokemon } = require('../controllers/get.pokemon.controller')

router.post('/', getPokemon)

module.exports = router
