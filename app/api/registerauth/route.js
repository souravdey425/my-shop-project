import { NextResponse } from "next/server";
import dbConnect from "../config/dbConnect";
import user from "../models/user";


export async function POST(req){
   if(req.method === "POST"){
    dbConnect();
   
    const {name,email,password} =await req.json()
    const data=await user.create({name,email,password})

    return NextResponse.json({data})
   }

}