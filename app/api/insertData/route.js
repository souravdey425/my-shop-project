import mongoose from 'mongoose';
import { NextResponse } from 'next/server'
import dbConnect from "../config/dbConnect";

// mongoose.connect("mongodb://0.0.0.0:27017/hello")
dbConnect()

const itemsSchema=new mongoose.Schema({
  userName:{type:String,index:{required:true,background:false}},
    // pname:{type:String,unique:true},
    pname:{type:String,index:{unique:true,background:false}},
    quantityType:Number,
    price:Number,
    priceFor:String
})


const billData=mongoose.model("Billdata",itemsSchema,"billdatas",{overwriteModels:true})


 
export async function POST(request) {

const {userName,pname,quantityType,price,priceFor}=await request.json();

try{
  const data = await billData.create({userName,pname,quantityType,price,priceFor})

 
  
 
  return NextResponse.json({data})
}catch(err){
  return NextResponse.json({status:"Not able to create"})
}
}