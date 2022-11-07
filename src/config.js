const mongoose = require('mongoose')
const { initializeApp } = require("firebase/app");





const firebaseConfig = {
    apiKey: process.env.STORAGE_API_KEY,
    authDomain: process.env.STORAGE_AUTH_DOMAIN,
    databaseURL: process.env.STORAGE_URL,
    projectId: "cogent-octane-367217",
    storageBucket: "cogent-octane-367217.appspot.com",
    messagingSenderId: "999575893612",
    appId: "1:999575893612:web:c92d830d2d74e8fd560a49",
    measurementId: "G-BFJSNQMWYQ"
};

const connectFB = async () => {
    try {
        const fb = await initializeApp(firebaseConfig);
        console.log('Firestore connected')
    } catch (error) {
        console.log(error)
    }
}



const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@mern-learnit.pxtpz.mongodb.net/msc?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = { connectDB, connectFB }


