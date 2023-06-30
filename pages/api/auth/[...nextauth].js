import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "../models/user";
import bcrypt from "bcryptjs"
import dbConnect from "../config/dbConnect";




export default NextAuth({
    session:{
        strategy:"jwt",
    },
    providers:[
        CredentialsProvider({
           
            async authorize(credentials,req){
                dbConnect()
                const{email,password}=credentials;
                
                const userdata=await user.findOne({email})
                if(!userdata){
                    console.log("Not Avalid UserName & Password");
                }
                const getPassword=await bcrypt.compare(password,userdata.password)
                if(!getPassword){
                    console.log("Not Avalid UserName & Password");
                }
                
                return userdata;
            }
        }),
    ],
    callbacks: {
        async signIn() {
            return true;
        }
      },
      pages:{
        signIn:"/"
      },
    
      secret: process.env.NEXTAUTH_SECRET,
})


