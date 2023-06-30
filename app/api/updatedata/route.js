import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";
import { NextResponse } from 'next/server'


dbConnect()
const itemSchema=mongoose.Schema({
    userName:{type:String,required:true},
    // pname:{type:String,unique:true},
    pname:String,
    quantityType:Number,
    price:Number,
    priceFor:String
})
const billData=mongoose.model("Billdata",itemSchema,"billdatas",{overwriteModels:true})
export async function PUT(request){
      const {userName,pname,quantityType,price,priceFor}=await request.json()
      const {_id:uid}=await billData.findOne({'pname':pname,'quantityType':quantityType})
      console.log(userName,pname,quantityType,price,priceFor)
      
        const data=await billData.findByIdAndUpdate(uid,{userName,pname,quantityType,price,priceFor})
        return NextResponse.json({data})
      }
      
   
