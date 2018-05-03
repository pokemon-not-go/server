require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/pokemonnotgo`, () => {
  console.log('connected to db');  
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('listening on port 3000')
})