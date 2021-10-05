const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

const postSchema = new Schema({
    trail: String,
    range: Number,
    text: String,
})

module.exports = mongoose.model('Post', postSchema)