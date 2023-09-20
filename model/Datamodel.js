const mongoose=require("mongoose")
const Schema= mongoose.Schema
const dataSchema= new Schema({
    name:{
        type:String,required:[true,"Name is required"]
    },
    author:{
        type : String,required:[true,"Author is required"]
    }
},{timestamps:true})

module.exports= mongoose.model("Book",dataSchema)