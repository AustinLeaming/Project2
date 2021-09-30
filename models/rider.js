const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create your User Model
const riderSchema = new Schema({
    name: String,
    email: String,
    // I would like trails to be in here, one user can have many trails riden
    // I would like bikes to be in here, one user can have many bikes 
    googleId: String // <-- required for Oauth 
})

module.exports = mongoose.model('Rider', riderSchema)