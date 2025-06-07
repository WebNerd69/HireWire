import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
     return (
          <div className='w-full md:h-[30vh] h-[35vh] bg-white flex justify-between items-center flex-col relative'>
               <div className='flex md:flex-row flex-col md:justify-between md:items-center w-full md:px-10 md:pt-20 px-5 pt-10 gap-y-16'>
                    <div className=' md:w-[40%]'><p className='poppins-medium md:text-4xl text-2xl '>HireWire made landing your <span className='bg-[#686df8] px-1 py- text-white'>dream job</span> a breeze.</p>
                         <p className='text-gray-300 text-sm poppins-light-italic absolute pt-5'>Tere yar ka koi compitition hi nahi😎</p>
                    </div>

                    <div className='md:w-[40%] h-full flex items-center md:gap-x-20  justify-evenly md:text-[1rem] text-[.7rem]'>
                         <div className='text-gray-500 poppins-semi-bold flex flex-col md:gap-y-5 gap-y-3'>
                              <p>Contact The developer</p>
                              <a href='https://www.instagram.com/rudra.csv/' target='_blank' className='hover:text-slate-900 cursor-pointer'>Instagram</a>
                              <a href='https://www.linkedin.com/in/rudra-pratap-roy-718393248/' target='_blank' className='hover:text-slate-900 cursor-pointer'>Linkedin</a>
                         </div>
                         <div className='text-gray-500 poppins-semi-bold flex flex-col md:gap-y-5 gap-y-3'>
                              <p>Documentation</p>
                              <a href='https://github.com/WebNerd69' target='_blank' className='hover:text-slate-900 cursor-pointer'>GitHub</a>
                              <a href="https://github.com/WebNerd69/HireWire/blob/main/README.md#-special-instructions" target='_blank' className='hover:text-slate-900 cursor-pointer'>About</a>
                         </div>
                         <div className='text-gray-500 poppins-semi-bold flex flex-col md:gap-y-5 gap-y-3'>
                              <p>Become a hiring partner</p>
                              <NavLink to="/partner-login" className='hover:text-slate-900 cursor-pointer'>Create job</NavLink>
                              <a href="https://github.com/WebNerd69/HireWire/blob/main/README.md#-special-instructions" target='_blank' className='hover:text-slate-900 cursor-pointer'>Documentaion</a>
                         </div>
                    </div>
               </div>
               <div className='w-full h-10 bg-[#686df8] flex justify-center items-center md:gap-x-48 text-white poppins-medium md:text-sm text-[.45rem]'>
                    <p className='md:w-[20%] w-[45%] text-center'>All rights reserved under copyrights 😝 </p>
                    <p className='sarina-regular md:text-2xl text-xl'>h</p>
                    <p className='md:w-[20%] w-[45%] text-center'>Made by WebNerd69 A.K.A-Rudra (IITGCS_24061391)</p>
               </div>
          </div>
     )
}

export default Footer