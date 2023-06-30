
import Image from 'next/image'
import React from 'react'
import styles from "../app/Styles/main.module.css"
import Link from 'next/link'

// import { SessionProvider, useSession } from 'next-auth/react'

const page = () => {

  return (

    <div className={styles.header}>
     <div className={styles.content}>
     <div className={styles.introtext}>

        <div className={styles.heading}>Tulsi Vandar</div>
        <div className={styles.paragraph}>Get Products on whole sell price as low as possible</div>
     </div>
     <Link href="/login" className={styles.button}>Login</Link>
     <Link href="/register" className={styles.button}>Register</Link>
     </div>
    </div>
    
  
  )
}

export default page