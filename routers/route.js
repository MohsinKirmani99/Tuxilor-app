const express=require("express")
const router= express.Router()
const{getall,postData,deleteData,updateData}=require("../controller/Controller")

//all data route
router.get('/alldata',getall)
//post data 
router.post("/add", postData)
//delete data
router.delete("/delete/:id", deleteData)
//update data
router.patch("/edit/:id", updateData)

module.exports= router