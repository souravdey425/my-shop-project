import mongoose from "mongoose"
import { NextResponse } from 'next/server';

mongoose.connect("mongodb://0.0.0.0:27017/hello")

const itemsSchema =new mongoose.Schema( {
  userName:String,
  pname: String,
  
});

const bill=mongoose.model("Billdata",itemsSchema,"billdatas",{overwriteModels:true});



 
export async function POST(request) {
  const {userName}=await request.json()
  
  const res=await bill.find({userName})

    console.log(res);

  return NextResponse.json({ res });
}