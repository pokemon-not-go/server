const router = require('express').Router()
const { getPokemon } = require('../controllers/get.pokemon.controller')
const { catchPokemon } = require('../controllers/get.yesOrNo.controller')

router.post('/', getPokemon)

router.put('/catch', catchPokemon)

module.exports = router
