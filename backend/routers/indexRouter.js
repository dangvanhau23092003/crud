const useRouter = require('./userRouter')

function routers(app) {

    app.get('/', useRouter)

}

module.exports = routers