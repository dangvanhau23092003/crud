// const UserModel = require('../models/UserModel')

class UserController {

    indexUser(req, res) {
        res.send('hello')
    }

}

module.exports = new UserController