var jwt = require('jsonwebtoken');
const userList = require('../modals/userSchema');
async function emailverificationController(req, res){
    const {authorization} = req.headers
    var decoded = jwt.verify(authorization, 'razib');
    const updateUser = await userList.findOneAndUpdate(
        {email:decoded.email},
        {verified:true},
        {new:true}
    )
    res.json({updateUser, message:"Update Successfull"});
    
}
module.exports = emailverificationController