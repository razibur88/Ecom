const mongoose = require('mongoose');
const { Schema } = mongoose;

const Subcategory = new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default:"waiting",
        enum:["waiting", "approved", "rejected"]
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"CategoryList"
    },
    created:{
        type:Date,
        default:new Date()
    },
    updated:{
        type:Date
    }


})

module.exports = mongoose.model("SubCategoryList", Subcategory)
