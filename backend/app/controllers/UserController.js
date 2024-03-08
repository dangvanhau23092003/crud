const UserModel = require("../models/UserModel")

class UserController {

    async indexUser(req, res) {
        try {
            const users = await UserModel.find()
            console.log("[users]",users)
            res.json(users)
        }
        catch (err) {
            console.log(err)
        }
    }

}

module.exports = new UserController