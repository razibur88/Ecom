const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname: {
        type:String,
        require:true
    },
    lastname: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin","merchant"]
    },
    verified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("UserList", UserSchema)
