const CategoryList = require("../modals/categorySchema")
const SubCategoryList = require("../modals/subCategorySchema")

async function createController(req,res){
   const {name, description}= req.body
   const duplicateCategory = await CategoryList.findOne({name})
   if(duplicateCategory){
    return res.json({success:"Category Already exists"})
   }
    const category = new CategoryList({
        name,
        description,
       })
       category.save()
       res.json({success:"Category add Successfully done"})
    
}

async function createsubController(req,res){
   const {name, description,category}= req.body
   const duplicateSubcategory = await SubCategoryList.findOne({name})
   if(duplicateSubcategory){
    return res.json({success:"Subcategory Already exists"})
   }
   const subCategory = new SubCategoryList({
    name,
    description,
    category,
   })

   await CategoryList.findOneAndUpdate(
    {_id:subCategory.category},
    {$push:{subCategory:subCategory._id}},
    {new:true}
   )
   subCategory.save()
   res.json({success:"Subcategory add Successfully done"})
}

async function createStatusController(req,res){
    const {name,status} = req.body
    if(status == "waiting" || status == "rejected" ){
        let updatestatus = await CategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:false, status:status}},
            {new:true}
        )
        res.json({success:"Category status Update"})
    }else if(status == "approved"){
        let updatestatus = await CategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:true, status:status}},
            {new:true}
        )
        res.json({success:"Category status Update"})
    }
    
}

async function createCategoryStatus(req,res){
    const {name,status} = req.body
    if(status == "waiting" || status == "rejected" ){
        let updatecategorystatus = await CategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:false, status:status}},
            {new:true}
        )
        res.json({success:"Category status Update"})
    }else if(status == "approved"){
        let updatecategorystatus = await CategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:true, status:status}},
            {new:true}
        )
        res.json({success:"Category status Update"})
    }
    
}


async function createSubCategoryStatus(req,res){
    const {name,status} = req.body
    if(status == "waiting" || status == "rejected" ){
        let updatesubcategorystatus = await SubCategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:false, status:status}},
            {new:true}
        )
        res.json({success:"Sub Category status Update"})
    }else if(status == "approved"){
        let updatesubcategorystatus = await SubCategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:true, status:status}},
            {new:true}
        )
        res.json({success:"Sub Category status Update"})
    }
    
}



async function getAllcategorydata(req,res){
    const category = await CategoryList.find({}).populate("subCategory")
    res.send(category)
}

async function getAllSubcategorydata(req,res){
    const subcategory = await SubCategoryList.find({})
    res.send(subcategory)
}
module.exports = {createController,createsubController,createStatusController, createCategoryStatus, createSubCategoryStatus,getAllcategorydata,getAllSubcategorydata}