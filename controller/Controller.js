const model= require("../model/Datamodel")

//get all data 
const getall=async(req,res)=>{
    try{
        const result = await model.find()
        res.status(200).json(result)
    }
    catch (err){
        console.log(err)
        res.status(400).json({mssg:"Something wrong"})
    }
}


//post data

const postData= async(req,res)=>{
    const{name,author}=req.body
    try{
        const entry= await model.create({name,author})
        res.status(200).json(entry)
    }
    catch(error){
        console.log(err)
        res.status(400).json({mssg:"something wrong"})
    }
}

//delete data

const deleteData= async(req,res)=>{
    const{id}=req.params
    try{
        const remove= await model.findByIdAndDelete(id)
        if(remove){
            res.status(200).json({mssg:"Deleted Successfully"})
        }
       
    }
    catch(err){
        console.log( err)
        res.status(400).json({mssg:"Enter valid id or Something went wrong"})
    }
}

//update data 

const updateData = async(req,res)=>{
    const{id}=req.params
    try{
        const upentry= await model.findByIdAndUpdate(id,req.body)
        res.status(200).json({mssg:"Updated Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({mssg:"Something went wrong"})
    }
}

module.exports= {getall,postData,deleteData,updateData}