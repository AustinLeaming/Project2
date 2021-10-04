const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: String,
    username: String
})

const postSchema = new Schema({
    trail: String,
    range: Number,
    text: String,
    comments: [commentSchema]
})

const trailSchema = new Schema({
    location: String
})

// riders will 
const bikeSchema = new Schema({
    make: String,
    model: String
})

// Create your User Model - "Rider"
const riderSchema = new Schema({
    name: String,
    email: String,
    trails: [trailSchema],
    bikes: [bikeSchema],
    posts: [postSchema],
    googleId: String // <-- required for Oauth 
})

module.exports = mongoose.model('Rider', riderSchema)