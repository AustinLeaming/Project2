const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

// Create your User Model - "Rider"
const bikeSchema = new Schema({
    make: String,
    model: String
})

module.exports = mongoose.model('Bike', bikeSchema)