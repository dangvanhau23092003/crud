const UserModel = require("../models/UserModel")
const path = require('path')

class UserController {
    // [GET] /users
    async indexUser(req, res) {
        try {
            const users = await UserModel.find()
            console.log("[users]", users)
            res.json(users)
        }
        catch (err) {
            console.log(err)
        }
    }
    // [POST] /users
    async storeUser(req, res) {
        try {
            const { name, email, contact, adress } = req.body
            const image = req.file.path
            console.log(req.file)
            const newUser = new UserModel({ name, email, contact, adress, image })
            await newUser.save()
            res.status(200).json(newUser)
        }
        catch (err) {
            console.log("Error", err)
            res.status(500).json({ err: "Error" })
        }
    }
    // [GET] view/:id
    async getViewUser(req, res) {
        await UserModel.findOne({ _id: req.params.id })
            .then(viewUser => res.json(viewUser))
            .catch(err => res.json(err))
    }
    // [GET] edit/:id
    async editUser(req, res) {
        await UserModel.findById({ _id: req.params.id })
            .then(editUser => res.json(editUser))
            .catch(err => res.json(err))
    }
    // [PUT] edit
    async putUser(req, res) {
        const imageData = req.file.path
        const { name, email, adress, contact } = req.body
        await UserModel.findByIdAndUpdate({ _id: req.params.id }, {
            name: name,
            email: email,
            contact: contact,
            adress: adress,
            image: imageData
        })
            .then(updateUser => res.json(updateUser))
            .catch(err => res.json(err))
    }

    async deleteUser(req, res) {
        await UserModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("success"))
        .catch(err => res.status(404).json(err,'error'));
    }
    
}

module.exports = new UserController