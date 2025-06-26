

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
//const uri=process.env.url
const conectedDb=async ()=>{
    
    try {
        await mongoose.connect("mongodb+srv://skshimul79977007:tiBPI7LUbBnOwdoE@cluster0.cwfmg5j.mongodb.net/vote")
        console.log("conceted done to db")
    } catch (error) {
        console.error("database connected faill")
        process.exit(0)
    } 
}

export default conectedDb