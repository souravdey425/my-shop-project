"use client"

import { useSession } from 'next-auth/react'
import React, {  useEffect, useState } from 'react'
import styles from "../Styles/insertdata.module.css"
import {  useSearchParams } from "next/navigation"
import axios from 'axios'


const page = () => {
    const[pname,setName]=useState("")
    const[quantityType,setQuantityType]=useState(1)
    const[price,setPrice]=useState("")
    const[priceFor,setPriceFor]=useState("kg")
    const[userName,setUserName]=useState("")
    const {data}= useSession();
  
  
    const searchParams=useSearchParams()
    const pname1 = searchParams.get("pname");
    const quantityType1=searchParams.get("quantityType");
    const price1=searchParams.get("price")
    const userName1=searchParams.get("userName")
   
  
   useEffect(()=>{
    if(pname1&&quantityType1&&price1){
      setName(pname1)
      setQuantityType(quantityType1)
      setPrice(price1)
    } 
   },[])

   
    const submitData=async(e)=>{
      e.preventDefault()
      if(pname1&&quantityType1&&price1){      
await axios.put('/api/updatedata',{
  userName,
   pname,
   quantityType,
   price,
   priceFor }) 
      }
    else  {await fetch('/api/insertData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({userName, pname,quantityType,price,priceFor }),
  })
   setName("")
   setQuantityType(1)
   setPrice("")
   setPriceFor("kg")
    }
  }
  
  return (
    <div className={styles.body}>
    <div className={styles.rapper}>
    <div className={styles.start}>
    <div className={styles.container}>
    <div className={styles.main}>
    <div className={styles.head}>
    <h1 className={styles.heading}>Specify Goods Details</h1>
    
    <div className={styles.main}>
    <div className={styles.form}>
    <div className={styles.email}>
    <h3 className={styles.label}>
    UserName:
    </h3>
    <input type='text' value={userName} className={styles.datain} onChange={(e)=>{setUserName(data?.user?.name)}}/>
    It will be auto control...By Pressing any key...
    </div>
    <div className={styles.email}>
    <h3 className={styles.label}>
    Goods Name:
    </h3><input type='name' value={pname} className={styles.datain} onChange={(e)=>setName(e.target.value)}/>
    </div>
    
    <div className={styles.email}>
     <div className={styles.price}>
     <div className={styles.quality}>
    <h3 className={styles.label}>
    Quality No:
    </h3></div><select defaultValue={quantityType} onChange={(e)=>setQuantityType(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    </div>
    </div>
    
    <div className={styles.email}>
    <div className={styles.price}>
    <div className={styles.number}>
    <h3 className={styles.label}>

    Price:</h3><input type='text' value={price} className={styles.datain} onChange={(e)=>setPrice(e.target.value)}/>
    </div>
    
   
    <select defaultValue={priceFor} className={styles.drops} onChange={(e)=>setPriceFor(e.target.value)}>
    <option value="kg">kg</option>
    <option value="12pc">12pc</option>
    <option value="1packet">1packet</option>
    </select>
    </div>
    </div>
    <div className={styles.buttoncontainer}>
    <button onClick={submitData} className={styles.button}>Submit</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default page