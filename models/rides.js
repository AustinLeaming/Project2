const mongoose = require('mongoose');
// all this does is allows us to ref Schema instead of mongoose.Schema
const Schema = mongoose.Schema

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String
  });

const rideSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    riderName: String,
    trail: String,
    range: Number,
    text: String,
    comments: [commentSchema]
})

module.exports = mongoose.model('Ride', rideSchema)