const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const bodyParser = require('body-parser')
const path = require('path');

app.use(cors())
app.use(express.json())
// app.use(express.static(__dirname + 'uploads'))
// Sử dụng bodyParser để đọc dữ liệu từ request body
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.use("/uploads", express.static("uploads"))


// const storage = multer.diskStorage({
//     destination: './upload',
//     filename: (req, res, next) => {
//         next(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage})


const db = require('./config/db/index')

db.connect()

// import indexRouter
const routers = require('./routers/indexRouter')
// const { patch } = require('./routers/userRouter')

const PORT = 5000

// routers trong indexRouter
routers(app)

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
})