const User = require('../models/user_model')
const jwt = require('jsonwebtoken')

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
            data: response
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
  }
}
