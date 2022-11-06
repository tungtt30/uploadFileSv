const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require('./src/config')
require('dotenv').config()
const bodyParser = require('body-parser')
const useRouter = require('./src/router/router');



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// connectDB()



useRouter(app)




app.listen(process.env.PORT, () => {
    console.log('success')
})

module.exports = app