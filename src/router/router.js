
const homeRouter = require('./homeRouter')
const songRouter = require('./songRouter')


const useRouter = (app) => {
    app.use('/', homeRouter)
    app.use('/api/song', songRouter)
}


module.exports = useRouter