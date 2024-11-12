const emailValidation = require("../helpers/emailValidation");
const UserList = require("../modals/userSchema")
const bcrypt = require('bcrypt');
async function loginController(req, res){
    const {email, password} = req.body
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
       bcrypt.compare(password, existingEmail[0].password).then(function(result) {
        if(result){
            console.log("success");
            res.json({success:"Login Successfully Done"})
            
        }else{
            res.json({error:"Email does not matching"})
            
        }
    });

   }else{
    res.json({error:"Email does not matching"})
   }
}
 module.exports = loginController