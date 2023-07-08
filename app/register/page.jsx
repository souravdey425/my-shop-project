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
// 'use client'

// import { useState } from "react"
// import axios from "axios"
// import { toast } from "react-hot-toast"

// export default function Register() {
//     const [data, setData] = useState({
//          name: '',
//           email: '',
//            password: ''
//          })

//          const registerUser = async (e) => {
//           console.log(data);
//             e.preventDefault()
//             await axios.post('/api/registerauth', data)
//             .then(() => toast.success('User has been registered!'))
//             .catch(() => toast.error('Something went wrong!'))
//          }

//     return (
//       <>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               className="mx-auto h-10 w-auto"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               alt="Your Company"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Register for an account
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" onSubmit={registerUser}>
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
//                   Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={data.name}
//                     onChange={e => setData({ ...data, name: e.target.value })}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={data.email}
//                     onChange={e => setData({ ...data, email: e.target.value })}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                     Password
//                   </label>
//                   <div className="text-sm">
//                     <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                       Forgot password?
//                     </a>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     value={data.password}
//                     onChange={e => setData({ ...data, password: e.target.value })}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Register
//                 </button>
//               </div>
//             </form>
  
//             <p className="mt-10 text-center text-sm text-gray-500">
//               Not a member?{' '}
//               <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//                 Start a 14 day free trial
//               </a>
//             </p>
//           </div>
//         </div>
//       </>
//     )
//   }