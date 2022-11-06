const mongoose = require('mongoose')



const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@mern-learnit.pxtpz.mongodb.net/msc?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB


