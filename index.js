const express = require('express');
const app = express();
const cors = require('cors')
const { connectDB, connectFB } = require('./src/config')
require('dotenv').config()
const bodyParser = require('body-parser')
const useRouter = require('./src/router/router');




app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// connect database, storage
connectDB()
connectFB()


// using router
useRouter(app)






// server start
app.listen(process.env.PORT, () => {
    console.log('server starting...')
})

module.exports = app