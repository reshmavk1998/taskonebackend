// import mongoose in db.js file
const mongoose = require('mongoose')

// Using mongoose define connection string
mongoose.connect('mongodb://localhost:27017/taskone',)
    console.log('MongoDB connected succesfully');


// create model for the project
// collection - users

const User= mongoose.model('User',{
    username:String,
    email:String,
    password:String,
    question:String
})

// export model
module.exports={
    User
}