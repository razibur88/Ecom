const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
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
    subCategory:[
        {
            type:Schema.Types.ObjectId,
            ref:"SubCategoryList"
        }
    ],
    created:{
        type:Date,
        default:new Date()
    },
    updated:{
        type:Date,
        default:new Date()
    }


})

module.exports = mongoose.model("CategoryList", Category)
