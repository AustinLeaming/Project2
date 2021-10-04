const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

const postSchema = new Schema({
    trail: String,
    range: Number,
    text: String,
    comment: [{}]
})

// Create your User Model - "Rider"
const riderSchema = new Schema({
    name: String,
    email: String,
    trails: [{}],
    bikes: [{}],
    posts: [postSchema],
    comment: [],
    googleId: String // <-- required for Oauth 
})

module.exports = mongoose.model('Rider', riderSchema)