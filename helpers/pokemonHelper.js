const axios    = require('axios')

module.exports = {
  pokemonHelper: (req, res) => {
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

    let pokemonSatu = new Promise (axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${random}`))
    let pokemonDua  = new Promise (axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${random}`))
    let pokemonTiga = new Promise (axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${random}`))

    promise.all(pokemonSatu, pokemonDua, pokemonTiga)
      .then(response => {
        console.log(response)
        // let pokemon = {
        //   name: response.data[0].name,
        //   types: response.data[0].types,
        //   sprite: response.data[0].sprite
        // }
        // 
        // pokemon.types.forEach(types => {
        //   if(types == pokemonType) {
        //     res.status(200).json({
        //       message: 'Success generate pokemon',
        //       data: pokemon
        //     })
        //   }
        // })
      })
    }
}
