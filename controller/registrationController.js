const bcrypt = require('bcrypt');
const UserList = require("../modals/userSchema")
const emailValidation = require("../helpers/emailValidation");
const sendEmail = require('../helpers/sendEmail');
const emailTemplate = require('../helpers/emailTemplate');
var jwt = require('jsonwebtoken');

async function registrationController(req, res){
    const {firstname, lastname,email, password,verified} = req.body
    if(!firstname){
         res.json({error:"Please Enter Your firstname Name"})
    }
    if(!lastname){
        res.json({error:"Please Enter Your lastname Name"})
    }
    if(!email){
        res.json({error:"Please Enter Your email"})
    }
    if(!password){
        res.json({error:"Please Enter Your password"})
    }
    if(!emailValidation(email)){
        res.json({error:"Invalid Email"})
    }


    const existingEmail = await UserList.find({email})

    if(existingEmail.length > 0){
        res.json({error:"Email is in already used"})
    }else{

    }
    bcrypt.hash(password, 10, function(err, hash) {
        const users = new UserList({
            firstname,
            lastname,
            email,
            password:hash,
            verified,
          })
          users.save()
          var token = jwt.sign({email}, 'razib');
          sendEmail(email, "Oreby Template", emailTemplate(token))
        });
        res.json({result :req.body, message:"User created succesfull"})



    
}
module.exports = registrationController