"use client"
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import Link from 'next/link'
const Delete = ({id}) => {
   
    const deleteClick=async(key)=>{
        // e.preventDefault();
        if(key){
        console.log(key);
        const{deta}=await axios.delete(`/api/delete/${key}`)
        console.log(deta);
        }
      }
  return (
    <Link href="/showdata">
    <FontAwesomeIcon icon={faDeleteLeft} onClick={()=>deleteClick(id)}/>
    </Link>
  )
}

export default Delete