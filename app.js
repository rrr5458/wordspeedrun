const express = require("express")
require('dotenv').config();
const { default: mongoose } = require("mongoose")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const userRoute = require('./routes/user')
const homeRoute = require('./routes/home')

//routes
app.use('/user', userRoute)
app.use('/', homeRoute)

//connect
const URI = process.env.MONGODB_URL
console.log()
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})


//middleware
app.use('/user', () => {
    console.log('this is a middleware')
})
app.use(express.urlencoded({ extended: false }));

app.listen(3000)
