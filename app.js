const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))

// app.use(cookieParser());

//Route for MainPage
app.use('/api/main', require('./routes/main'))

//Set the server port value
const PORT = config.get('port') || 5000

//Function for connect to database (MongoDB)
async function databaseConnect() {
    mongoose.connect(config.get('mongoURI'), {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    })
}

//Function to start the app
async function initServer() {
    try {
        await databaseConnect();
        app.listen(PORT, () => console.log(`App launched on port ${PORT}...`))
    } catch (e) {
        console.warn("Something wrong with server: ", e.message)
    }
}
initServer()