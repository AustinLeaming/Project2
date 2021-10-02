const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

// Create your User Model - "Rider"
const riderSchema = new Schema({
    name: String,
    email: String,
    trails: [{}],
    bikes: [{}],
    post: [],
    comment: [],
    googleId: String // <-- required for Oauth 
})

module.exports = mongoose.model('Rider', riderSchema)