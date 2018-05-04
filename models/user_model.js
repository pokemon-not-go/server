const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    pokemon: [String],
    fbId: String
}, {
    timestamps: true
})

let user = mongoose.model('user', userSchema);

module.exports = user;
