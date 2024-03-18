const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserModel = new Schema({
    name: {type: String, default: ''},
    image: {type: String, default: ''},
    adress: {type: String, default: ''},
    email: {type: String, default: ''},
    contact: {type: String, default: ''},
}, {
    timestamps: true,
})

module.exports = mongoose.model('users', UserModel)