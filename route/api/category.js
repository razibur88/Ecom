const express = require('express')
const {createController,createsubController,createStatusController,createCategoryStatus,createSubCategoryStatus,getAllcategorydata,getAllSubcategorydata} = require('../../controller/categoryController')
const router = express.Router()

router.post("/createcategory", createController)
router.post("/createsubcategory", createsubController)
router.post("/status", createStatusController)
router.post("/statuscategory", createCategoryStatus)
router.post("/statussubcategory", createSubCategoryStatus)


router.get("/getcategory", getAllcategorydata)
router.get("/getsubcategory", getAllSubcategorydata)


module.exports = router