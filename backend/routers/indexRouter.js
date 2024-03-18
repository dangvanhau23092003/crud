const useRouter = require('./userRouter')

function routers(app) {

    app.use('/', useRouter)

}

module.exports = routers