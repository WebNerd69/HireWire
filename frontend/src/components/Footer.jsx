import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-white flex justify-between items-center flex-col'>
          <div className='flex justify-between  items-center w-full px-10 pt-20'>
               <div className=' w-[40%]'><p className='poppins-medium text-4xl'>HireWire made landing your <span className='bg-[#686df8] px-3 py-1 text-white'>dream job</span> a breeze.</p>
               <p className='text-gray-300 text-sm poppins-light-italic absolute pt-5'>Tere yar ka koi compitition hi nahi😎</p></div>
               
          <div className='w-[40%] h-full flex items-center gap-x-20 justify-evenly'>
               <div className='text-gray-500 poppins-medium flex flex-col gap-y-5'>
                    <p>Contact The developer</p>
                    <a href='https://www.instagram.com/rudra.csv/' target='_blank' className='hover:text-slate-900 cursor-pointer'>Instagram</a>
                    <a href='https://www.linkedin.com/in/rudra-pratap-roy-718393248/' target='_blank' className='hover:text-slate-900 cursor-pointer'>Linkedin</a>
               </div>
               <div className='text-gray-500 poppins-medium flex flex-col gap-y-5'>
                    <p>Documentation</p>
                    <a href='https://github.com/WebNerd69' target='_blank' className='hover:text-slate-900 cursor-pointer'>GitHub</a>
                    <a href="https://github.com/WebNerd69/HireWire" target='_blank' className='hover:text-slate-900 cursor-pointer'>About</a>
               </div>
               <div className='text-gray-500 poppins-medium flex flex-col gap-y-5'>
                    <p>Become a hiring partner</p>
                    <NavLink to="/partner-login"  className='hover:text-slate-900 cursor-pointer'>Create job</NavLink>
                    <a href="https://github.com/WebNerd69/HireWire" target='_blank' className='hover:text-slate-900 cursor-pointer'>Documentaion</a>
               </div>
          </div>
          </div>
          <div className='w-full h-10 bg-[#686df8] flex justify-center items-center gap-x-48 text-white poppins-medium text-sm'>
               <p className='w-[20%] text-center'>All rights reserved under copyrights 😝 </p>
               <p className='sarina-regular text-2xl'>h</p>
               <p className='w-[20%] text-center'>Made by WebNerd69 A.K.A-Rudra (IITGCS_24061391)</p>
          </div>
    </div>
  )
}

export default Footer