import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";
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
        const deletComment=await billData.find((id)=>id.id===parseInt(comment))
        const index=await billData.findIndex((id)=>id.id===parseInt(comment))
       await billData.splice(index,1)
        return NextResponse({deletComment})
      }