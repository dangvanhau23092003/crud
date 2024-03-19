const express = require('express');

const multer = require('multer')
const path = require('path')

const UserController = require('../app/controllers/UserController')
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})

router.put('/update-edit/:id', upload.single('file'), UserController.putUser)
router.get('/get-edit/:id', UserController.editUser)
router.post('/create', upload.single('file'),  UserController.storeUser)
router.get('/view/:id', UserController.getViewUser)
router.get('/', UserController.indexUser )

module.exports = router