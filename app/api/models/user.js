import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const useschema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:{type:String,unique:true},
    password:String,
})
useschema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})
export default mongoose.model.User || mongoose.model("User",useschema,"users",{overwriteModels:true})