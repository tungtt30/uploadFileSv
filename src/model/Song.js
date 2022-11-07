
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    singer: {
        type: String
    },
    songUrl: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    like: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Song', SongSchema)