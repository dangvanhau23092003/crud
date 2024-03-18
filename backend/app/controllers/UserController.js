const UserModel = require("../models/UserModel")
const path = require('path')

class UserController {
    // [GET] /users
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

    async storeUser(req, res) {
        try {
            const {name, email, contact, adress} = req.body
            const image = req.file.path
            console.log(req.file)
            const newUser = new UserModel({name, email, contact, adress, image})
            // const newUser = new UserModel({imageUser})

            // res.json(imageUser)
            await newUser.save()
            res.status(200).json(newUser)
            // if (!newUser) {
            //     return res.status(404).json({ message: 'User not found'})
            // }

            // const saveUser = await newUser.save()
            // res.status(200).json(newUser)
            // res.send('saveUser')
        }
        catch (err) {
            console.log("Error", err)
            res.status(500).json({err: "Error saving user"})
        }
    }

}

module.exports = new UserController