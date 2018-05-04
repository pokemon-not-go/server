const axios = require('axios')

const pokeWater = ['squirtle', 'psyduck', 'poliwag', 'magikarp', 'gyarados', 'slowbro', 'lapras', 'vaporeon']
const pokeFire = ['charmander', 'magmar', 'charizad', 'vulpix', 'growlithe', 'entei', 'flareon', 'moltres']
const pokeDark = ['rattata', 'meowth', 'raticate', 'umbreon', 'absol', 'gyarados', 'muk', 'houndoom']
const pokeBug = ['caterpie', 'metapod', 'pinsir', 'beedrill', 'venomoth', 'pinsir', 'ariados', 'scizor']
const pokeElec = ['pikachu', 'magnemite', 'raichu', 'zapdos', 'voltorb', 'jolteon', 'electabuzz', 'geodude']

module.exports = {
  getPokemon: (req, res) => {
    let random = Math.round(Math.random() * 7)
    let weather = req.body.weather
    let pokemon = ''

    if(weather == 'Rain'){
      pokemon = pokeWater[random]      
    } else if (weather == 'Clear'){
      pokemon = pokeFire[random]
    } else if (weather == 'Clouds'){
      pokemon = pokeDark[random]
    } else if (weather == 'Drizzle'){
      pokemon = pokeBug[random]
    } else if (weather == 'Thunderstorm'){
      pokemon = pokeElec[random]
    }

    axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${pokemon}`)
    .then((response) => {
        let pokemonData = {
          name: response.data[0].name,
          types: response.data[0].types,
          sprite: response.data[0].sprite
        }
        res.status(200).json({
            message: 'Success generate pokemon',
            data: pokemonData
      })
    })
    .catch((error) => {
        res.status(400).json({
          message: 'Error when getting pokemon',
          error: error
        })
    })
  }
}
