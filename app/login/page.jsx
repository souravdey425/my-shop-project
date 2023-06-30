"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "../Styles/style.module.css"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter()

  const submitHandler = async (e) => {
  
    e.preventDefault()
    
      try{
        const data=await signIn("credentials", {
          redirect: false,
          email:email,
          password:password,
          callbackUrl:"/insertdata"
        })
      
        if(data.ok){
          router.push(data.url)
        }
        return true;
        
        
      }
     
       catch(err){
        console.log(err);
       }
      
      return true
     
    
  };

  return (
     <div>
    <div className={styles.form}>
    </div>
   <div className={styles.header}>
   <div className={styles.container}>
   <h2 className={styles.heading}>Login Page</h2>
   <div className={styles.formcontainer}>
   <div className={styles.main}>
    
      <h3 className={styles.label}>Email:</h3><input type="email" className={styles.datain} onChange={(e)=>setEmail(e.target.value)}/>
      
      
      <h3 className={styles.label}>Password:</h3><input type="password" className={styles.datain} onChange={(e)=>setPassword(e.target.value)}/>
      <div className={styles.buttoncontainer}>
      <button onClick={submitHandler} className={styles.button}>Login</button>
      </div>
      </div>
      </div>
     <Link href="/register" className={styles.registation}>Don't have an account?</Link>
      </div>
      
      </div>
    </div>

  );
};

export default Login;