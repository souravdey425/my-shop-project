"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import styles from "../Styles/showdata.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  faEdit} from "@fortawesome/free-solid-svg-icons"
import Delete from "../component/Delete"

import Link from 'next/link'


export default function Home() {
  const[digit,setDigit]=useState()
  const [showText,setShowText]=useState(false)
  const {data}=useSession()
  
  const userName= data?.user?.name;

  

const clicked=async(e)=>{
  e.preventDefault()
  setShowText(true)
  try{
 const {data}=await axios.post("/api",{userName})
 
 setDigit(data)
}catch(err){
  console.log(err);
}
}

// const searchParams=useSearchParams()
// const uid=searchParams.get(_id)
// console.log(uid);

 
  return (
    <div className={styles.top} >
      {digit?.res?.sort((a,b)=>a.pname > b.pname ? 1 : -1)
      .map((index,key)=>{return(<div  key={key}>
        <div className={styles.data} >
        <h1 >{index.pname}</h1>
        <h3>{index.quantityType}</h3>
        <h3>{index.price}</h3>
        <h3>{index.priceFor}</h3>
        <Link href={{pathname:"/insertdata",query:{pname:index.pname,quantityType:index.quantityType,price:index.price,priceFor:index.priceFor}}}>
        <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Delete id={index._id}/>
        {console.log(digit?.res)}
        </div>
      </div>)})}
 
      {!showText &&
      <div className={styles.main}>
      <div className={styles.rapper}>
      <div className={styles.header}>
      <div className={styles.layout}>
      <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.buttoncontainer}>
      <div className={styles.buttonrapper}>
      <p className={styles.para}>click me to show data</p>
      
        <span className={styles.icon}>&#8595;</span>
      <button onClick={clicked} className={styles.button}>Click Me</button>
      </div>
      </div>
       </div>
       </div>
       </div>
       </div>
       </div>}
    </div>
  )
}