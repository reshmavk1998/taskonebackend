// import db.js
const db = require('./db')


// signup
const signup =(uname,email,pswd)=>{
console.log('inside signup function in data service');
   //check email in mongoDB - db.users.findOne()   
   return db.User.findOne({
        email
    }).then((result)=>{
         console.log(result);
         if(result){
            return{
                statusCode:403,
                message:'Account Already exist!!'
            }
         }
         else{
            // to add new user
            const newUser = new db.User({
                username:uname,
                email,
                password:pswd,
                question:ques
            })
            // to save new user in mongodb use save()
            newUser.save()
            return{
                statusCode:200,
                message:'Signup successfull... '
            }
         }
    })
}

// login
const login = (email,pswd)=>{
    console.log('Inside login function body');
// check email ,pswd in mongoDB - db.users.findOne()
return db.User.findOne({
    email,
    password:pswd
}) .then(
    (result)=>{
        if(result){
            return{
            statusCode:200,
            message :'login Successfull'
            }
        }
        else{
            return{
                statusCode:404,
                message :'Invalid Account / Password'
            }
        }
    } 
)
}

// login
const discussion = (uname,ques)=>{
    console.log('Inside discussion function body');
// check uname , ques in mongoDB - db.users.findOne()
return db.User.findOne({
    uname,
    question:ques
}) .then(
    (result)=>{
        if(result){
            return{
            statusCode:200,
            message :'posted Successfull'
            }
        }
        else{
            return{
                statusCode:404,
                message :'Invalid post'
            }
        }
    } 
)
}



// export
module.exports={
    signup,
    login,
    discussion
}