// const getWeather = require('./get.weather.controller.js');
// const getPokemon = require('./get.pokemon.controller.js');
// const getYesOrNo = require('./get.yesOrNo.controller.js');

const axios    = require('axios')
// module.exports = {
  function getWeather (req, res) {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=bc8acfa8f52dbc5fee477318284b9856')
      .then((response) => {
        res.send(200).json({
          currentWeather: response.data.weather[0].main
        })
        if(currentWeather == 'cloud') {

          let random = Math.floor((Math.random() * 300) + 1)

          axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${random}`)
            .then(response => {
              let pokemon = {
                name: response.data[0].name,
                types: response.data[0].types,
                sprite: response.data[0].sprite
              }

              pokemon.types.forEach(types => {
                if(types == "water") {
                  res.status(200).json({
                    message: 'nih pokemon',
                    data: pokemon
                  })
                }
              })
            })
            .catch(error => {
              res.status(400).json({
                message: 'error pak!'
              })
            })
        }
      })
      .catch((err) => {
        res.send(400).json({
          err
        })
      })
  }
// }

getWeather()
