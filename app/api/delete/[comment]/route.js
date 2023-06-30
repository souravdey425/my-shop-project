import mongoose from "mongoose";
import dbConnect from "../../config/dbConnect";
import { NextResponse } from 'next/server'
import { comment } from "postcss";



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
export async function DELETE(request){
    const searchParams  = new URL(request.url).pathname.split('/').pop()


  
    console.log(searchParams)
    
    
        const data=await billData.deleteOne( {_id:searchParams})
        console.log(data)
        return NextResponse.json({data})
      }
      
   
