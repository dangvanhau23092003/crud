const express = require('express')
const app = express()

const db = require('./config/db/index')

db.connect()

// import indexRouter
const routers = require('./routers/indexRouter')

const PORT = 5000
// routers trong indexRouter
routers(app)

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
})