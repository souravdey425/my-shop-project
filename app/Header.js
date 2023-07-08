"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from "../app/Styles/navbar.module.css"
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
  const {data}=useSession()
useEffect(()=>{
  console.log(data)
},[data])
  
  
  return (
    <div className={styles.container}>
    <div className={styles.rapper}>
        {!data && <div className={styles.header}>
        <div className={styles.head}>
        <ul className={styles.ul}>
        <li className={styles.li}>
        <Link href="/login" className={`${styles.link} ${styles.design}`}>Login</Link>
        </li>
        <li>
        <Link href="/register" className={`${styles.link} ${styles.design}`}>Registation</Link>
        </li>
        </ul>
        </div>
        </div>}
        {data&& <div className={styles.header}>
        <div className={styles.head}>
        <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/" className={`${styles.link} ${styles.design}`}>Home</Link>
          </li>
          <li className={styles.li}>
          <Link href="/insertdata" className={`${styles.link} ${styles.design}`}>Insert Bill Data</Link>
          </li>
          <li className={styles.li}>
          <Link href="/showdata" className={`${styles.link} ${styles.design}`}>Show Bills</Link>
          </li>
          <li className={styles.li}>
          {/* <Link href="" className={`${styles.link} ${styles.design}`}>{data?.user?.name}</Link> */}
          <span onClick={()=>signOut()} className={`${styles.link} ${styles.design} ${styles.log}`}>Log Out</span>
          </li>
        </ul>
        </div>
        </div>
        }
        </div>
    </div>
  )
}

export default Header