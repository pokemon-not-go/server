const axios    = require('axios')
const { pokemonHelper } = require('../helpers/pokemonHelper')

module.exports = {
  getPokemon: (req, res) => {
    let random = Math.floor((Math.random() * 30) + 1)
    let weather = req.body.weather

    let pokemonType = ''
    if(weather == 'Rain'){
      pokemonType = 'Water'
    } else if (weather == 'Clear'){
      pokemonType = 'Fire'
    } else if (weather == 'Clouds'){
      pokemonType = 'Dark'
    } else if (weather == 'Drizzle'){
      pokemonType = 'Bug'
    } else if (weather == 'Thunderstorm'){
      pokemonType = 'Electric'
    }

    axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${random}`)
      .then(response => {
        let pokemon = {
          name: response.data[0].name,
          types: response.data[0].types,
          sprite: response.data[0].sprite
        }

        let pokemonShow = {}
        pokemon.types.forEach(types => {
          console.log(types)
          if(types == pokemonType) {
            pokemonShow = pokemon
          }
        })

        if(Object.keys(pokemonShow).length == 0) {
            console.log('masuk kesini')
            pokemonHelper
        } else {
          res.status(200).json({
            message: 'Success generate pokemon',
            data: pokemonShow
          })
        }

      })
      // .catch(error => {
      //   res.status(400).json({
      //     message: 'error pak!'
      //   })
      // })
  }
}
