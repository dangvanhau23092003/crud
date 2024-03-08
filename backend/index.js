const express = require('express')
const app = express()
var cors = require('cors')

const db = require('./config/db/index')

db.connect()

// import indexRouter
const routers = require('./routers/indexRouter')

const PORT = 5000
app.use(cors())
// routers trong indexRouter
routers(app)

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
})