import React from 'react'
import "../App.css"
import searchIcon from "../assets/search-2-line.svg"
const Hero = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
     <div className='flex flex-col justify-center items-center '>
          <div className='text-center text-5xl font-semibold text-slate-850 poppins-medium leading-relaxed cursor-default'>
               <p>Land your <span className='text-white bg-[#686DF8] px-2 py-1'>dream job</span> with ease using</p>
               <p className='poppins-semi-bold'>HireWire</p>
          </div>
          <div className='text-center text-sm text-slate-600 poppins-light-italic cursor-default'>
               <p>HireWire is a platform that helps you find your dream job without hastle.</p>
          </div>
          <div className="search w-[800px] rounded-full border-2 border-[#686DF8] px-3 py-2 flex justify-between items-center mt-5 shadow-lg poppins-medium">
               <div className='flex gap-x-5 items-center'>
                    <button className='bg-[#686DF8] text-white px-3 py-3 rounded-full'><img src={searchIcon} alt="search" className='w-5 h-5'/></button>
                    <input type="text" placeholder='Search for a job' className='w-[600px] px-5 text-lg outline-none'/>
               </div>
               <div className='w-[20%] bg-[#989bf93d] text-[#686df8] px-3 py-3 rounded-full text-center '><i className="ri-map-pin-line"></i> Location</div>
               
          </div>
     </div>
     </div>
  )
}

export default Hero