require("dotenv").config()
const express= require("express")
const mongoose= require("mongoose")
const app= express()
const dataexpress=require("./routers/route")
//app listening 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

//db connection 

mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log("connected to Db")
    })
    .catch(()=>{
        throw new Error("Connection failed")
    })


//middleware

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})

//router 
app.use('/api/tuxilo/',dataexpress)