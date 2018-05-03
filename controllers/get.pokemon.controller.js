const axios = require('axios')

module.exports = {
    getPokemon: (inputType) => {
        let random = Math.floor((Math.random() * 300) + 1)

        axios.get(`https://pokeapi.bastionbot.org/v1/pokemon/${random}`)
        .then(response => {
            let pokemon = {
                name: response.data[0].name,
                types: response.data[0].types,
                sprite : response.data[0].sprite
            }
        
            pokemon.types.forEach(types => {
                if (types == inputType) {
                    res.status(200).json({
                        message: 'nih pokemon',
                        data: pokemon
                    })
                } 
            })
            
        })
        .catch (error => {
            res.status(400).json({
                message: 'error pak!'
            })
        })          
    }
}

