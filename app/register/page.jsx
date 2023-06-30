"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../Styles/style.module.css"
import { useRouter } from 'next/navigation'

const page = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const router=useRouter()
  const clicked=async(e)=>{
    e.preventDefault()
    try{
   const {data}=await axios.post("/api/registerauth",{
    name,email,password
   })
   router.push("/login")
}catch(err){
    console.log(err);
}

  }
   
  return (
   <div>
       <div className={styles.form}>
    </div>
    <div className={styles.header}>
   <div className={styles.container}>
   <h2 className={styles.heading}>Registation Page</h2>
   <div className={styles.formcontainer}>
   <div className={styles.main}>
   <h3 className={styles.label}>Name:</h3><input className={styles.datain} type='text' onChange={(e)=>setName(e.target.value)}/>
   <h3 className={styles.label}>Email:</h3><input type='email' className={styles.datain} onChange={(e)=>setEmail(e.target.value)}/>
   <h3 className={styles.label}>Password:</h3><input type='password' className={styles.datain} onChange={(e)=>setPassword(e.target.value)}/>
   <div className={styles.buttoncontainer}>
    <button className={styles.button} onClick={clicked}>Register</button>
    </div>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default page