const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserModel = new Schema({
    name: {type: String, require: ''},
    image: {type: String, require: ''},
    address: {type: Number, require: ''},
    email: {type: String, require: ''},
    contact: {type: Number, require: ''},
}, {
    timestamps: true,
})

module.exports = mongoose.model('users', UserModel)