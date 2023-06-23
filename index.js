// import express inside index.js
const express = require('express')

// import cors in index.js
const cors = require('cors')

// import dataService
const dataservice = require('./services/dataService')

// create server app using express
const server = express()

// use cors
server.use(cors({
    origin:'http://localhost:4200'
}))

// to parse json data
server.use(express.json())


// set up port for server app
server.listen(3000,()=>{
 console.log('server stared at 3000');
})

// taskone fron end request resolving

// signup api call resolving
server.post('/signup',(req,res)=>{
console.log('inside signup function');
console.log(req.body);
dataservice.signup(req.body.uname,req.body.email,req.body.pswd)
.then((result)=>{
    res.status(result.statusCode).json(result)

})
})

// login api call resolving
server.post('/login',(req,res)=>{
    console.log('inside login Api');
    console.log(req.body);
    // asynchronous
    dataservice.login(req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    
    })
    })

    // discussion api call resolving
    server.post('/discussion',(req,res)=>{
        console.log('inside discussion Api');
    console.log(req.body);
    // asynchronous
    dataservice.discussion(req.body.uname,req.body.question)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    
    })
    })