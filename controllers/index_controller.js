const User = require('../models/user_model')
const jwt = require('jsonwebtoken')
const axios = require('axios')

module.exports = {
  loginUser (req, res) {
    let fbId = req.body.fbId
    let name = req.body.name
    let email = req.body.email

    User.findOne ({
      fbId: fbId
    })
    .then(function(userData){
      if (!userData) {
        User.create ({
          email: email,
          fbId: fbId,
          name: name,
          pokemon: []
        })
        .then(function(response){
          let token = jwt.sign({userId: response._id, name: response.name}, process.env.SECRET)
          res.status(200).json({
            message: 'Success create new user',
            data: response,
            token: token
          })
        })
        .catch(function(err){
          res.status(400).json({
            message: 'Error while creating a new user',
            error: err
          })
        })
      } else {
        let token = jwt.sign({userId: userData._id, name: userData.name}, process.env.SECRET)
        res.status(200).json({
          message: 'Success login',
          token: token
        })
      }
    })
    .catch(function(err){
      res.status(500).json({
        message: 'error finding user',
        error: err
      })
    })
  },
  getWeather: (req, res) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${process.env.TOKEN_WEATHER}`)
      .then((response) => {
        res.status(200).json({
          message: 'success get weather detail',
          currentWeather: response.data.weather[0].main
        })
      })
      .catch((err) => {
        res.status(400).json({
          err
        })
      })
  },
  catchPokemon (req, res) {
    let pokemon = req.body.pokemon
    let userId = req.body.id

    User.updateOne({_id: id}, {pokemon: pokemon})
    .then(function(result){
      res.status(200).json({
        message: 'Success capture a pokemon',
        result: result
      })
    })
    .catch(function(err){
      res.status(500).json({
        message: 'error occured when updating data',
        error: err
      })
    })
  }
}
