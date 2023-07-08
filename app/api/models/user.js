import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const useschema=new mongoose.Schema({
    name:{type:String,index:{unique:true,background:false}},
    email:{type:String,index:{unique:true,background:false}},
    password:String,
})
useschema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})
export default mongoose.model.User || mongoose.model("User",useschema,"users",{overwriteModels:true})