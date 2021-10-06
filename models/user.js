const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

//create your user schema 
const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String // <-- required for Oauth 
})

module.exports = mongoose.model('User', userSchema)