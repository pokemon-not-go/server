const axios = require('axios')
const User = require('../models/user_model')

module.exports = {
  getYesOrNo: (req, res) => {
    axios.get('https://yesno.wtf/api')
      .then(response => {
        let answer = response.data.answer
        if(answer === 'yes'){
          let pokemon = req.body.pokemon
          let userId = req.body.id
      
          User.updateOne({_id: userId}, {pokemon: pokemon})
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
        }else{
          res.status(200).json({
            message: 'Sorry you failed to capture the pokemon'
          })
        }
      })
      .catch((err) => {
        res.status(400).json({
          err
        })
      })
  }
}
