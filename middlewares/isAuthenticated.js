

import jwt from "jsonwebtoken";
import { User } from "../models/UserScema.js";
import dotenv from 'dotenv'
const isAuthenticated = async (req, res, next) => {
    try {
     
  const token=req.header("Authorization")
 console.log(token)
  if(!token){
    return res.status(401).json({msg:"not massage"})
  }
  
 console.log("token",token)
   
const jwttoken=token.replace("Bearer","").trim()
console.log(jwttoken)
  

try {
  const isVerified=jwt.verify(jwttoken,process.env.JWT_SECRECT_KEY)
 
   console.log(isVerified)

const userdata=await User.findOne({email:isVerified.email}).select({password:0})

console.log(userdata)

req.user=userdata,
req.token=token,
req.userId=userdata._id

  next()
} catch (error) {
  console.log(error)
}

    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;

