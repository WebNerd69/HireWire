import React, { useContext, useState } from 'react'
import "../App.css"
import searchIcon from "../assets/search-2-line.svg"
import { AppContext } from '../context/AppContext'
const Hero2 = () => {
     const {searchBy , setSearchBy , setSearchValue , searchValue} = useContext(AppContext)

     const toggleSearchParamHandler = () => {
          if (searchBy === "title") {
               setSearchBy("location")
          } else {
               setSearchBy("title")
          }
     }
     const searchValueHandler = (e)=>{
          setSearchValue(e.target.value)
     }
     return (
          <div className='w-[100vw] h-[100vh] flex justify-center items-center relative'>
               <div className='flex flex-col justify-center items-center  '>
                    <div className='text-center md:text-5xl text-2xl font-semibold text-slate-850 poppins-medium leading-relaxed cursor-default px-5'>
                         <p>Explore your <span className='text-white bg-[#686DF8] px-2 py-1'>dream job</span> right here.</p>
                    </div>
                    <div className='text-center md:text-sm text-[10px] text-slate-600 poppins-light-italic cursor-default tracking-wide mt-5'>
                         <p>Explore your carier options here with ease.</p>
                    </div>
                    <div className="search md:w-[800px] w-[400px] rounded-full border-2 border-[#686DF8] px-3 py-2 flex justify-between items-center md:mt-5 mt-8 shadow-lg poppins-medium bg-white">
                         <div className='flex gap-x-5 items-center'>
                              <button className='bg-[#686DF8] text-white px-3 py-3 rounded-full'><img src={searchIcon} alt="search" className='w-5 h-5' /></button>
                              <input type="text" placeholder='Search for a job' className='w-[150px] md:px-5 md:w-[600px] md:text-lg text-sm outline-none bg-transparent' value={searchValue} onChange={(e)=>searchValueHandler(e)} />
                         </div>
                         <button
                              type="button"
                              className="md:w-[20%]  bg-[#989bf93d] text-[#686df8] px-3 py-3 rounded-full text-center cursor-pointer flex items-center justify-center gap-2 text-sm md:text-[1rem]"
                              onClick={toggleSearchParamHandler}
                         >
                              {searchBy === "location" ? (
                                   <>
                                        <i className="ri-map-pin-line"></i>
                                        Location
                                   </>
                              ) : (
                                   <>
                                        <i className="ri-ball-pen-line"></i>
                                        Title
                                   </>
                              )}
                         </button>

                    </div>
                    <div className='flex flex-col items-center gap-y-2 absolute bottom-5'>
                         <div className=' md:w-[60px] md:h-[60px] w-12 h-12 bg-[#686DF8] rounded-full flex items-center justify-center font-bold'>
                              <i className="ri-arrow-down-line md:text-3xl text-2xl text-white"></i>
                         </div>
                         <p className='text-gray-500 md:text-sm poppins-light-italic text-[12px]'>scroll to explore</p>
                    </div>

               </div>
          </div>
     )
}

export default Hero2