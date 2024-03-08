const mongoose = require('mongoose')
const { Schema } = mongoose.Schema()

const UserModel = new Schema({
    name: {type: String, require: ''},
    image: {type: String, require: ''},
    address: {type: Number, require: ''},
    email: {type: String, require: ''},
    contact: {type: Number, require: ''},
}, {
    timestamps: true
})

module.exports = mongoose.model('users', UserModel)