// import { NextResponse } from "next/server";
// // import dbConnect from "../config/dbConnect";
// // import user from "../models/user";
// import bcrypt from 'bcrypt'
// import prisma from '../../lib/prismadb'


// export async function POST(req){
//    if(req.method === "POST"){
//    //  dbConnect();
   
//     const {name,email,password} =await req.json()
//    //  const data=await user.create({name,email,password})
//    if(!name || !email || !password) {
//       return new NextResponse('Missing Fields', { status: 400 })
//   }else{

//   const exist = await prisma.user.findUnique({
//       where: {
//           email
//       }
//   });

//   if(exist) {
//       throw new Error('Email already exists')
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = await prisma.user.create({
//       data: {
//           name,
//           email,
//           hashedPassword
//       }
   
//   });


//     return NextResponse.json({user})
// }
//    }

// }
import bcrypt from 'bcrypt'
import prisma from '../../lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json();
    const { name, email, password } = body;
    console.log(body);

    if(!name || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });
    console.log(exist);

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}