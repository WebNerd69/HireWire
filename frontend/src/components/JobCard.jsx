import React, { useContext } from 'react'
import "../App.css"
import { AppContext } from './../context/AppContext';
const JobCard = ({company , type , date , title , salary , location , id}) => {

     const {navigate , userType} = useContext(AppContext)

     function getDaysAgoFromISO(isoDateString) {
          const now = new Date();
          const pastDate = new Date(isoDateString);
        
          const diffMs = now - pastDate;
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
          return (diffDays === 0 ? "Today" : `${diffDays} day(s) ago`);
        }
     const daysAgo = getDaysAgoFromISO(date)

     const handleApply = ()=>{
          navigate(`/job/${id}`)
     }
  return (
    <div className='w-[90%] min-h-[240px] bg-white rounded-3xl overflow-hidden relative flex justify-center' id='jobcard'>
          {/* <div className='h-full w-2 absolute left-0 top-0 bg-red-400'></div> */}
          <div className='flex flex-col gap-y-3 relative w-full md:px-20 px-5 py-7'>
               <div className='flex w-full gap-x-16 poppins-light text-gray-400 text-sm'>
                    <p>{company}</p>
                    <p>{type}</p>
                    <p>{daysAgo}</p>
               </div>
               
               <div className='w-[90%] flex justify-between flex-col'> 
                    <p className='poppins-medium md:text-3xl text-xl'>{title}</p>             
                    <p className='poppins-light-italic text-gray-400'>{salary}</p>
               </div>

               <div className='w-[100%] h-[33%] bg-[#686df82e] absolute -left-0 -bottom-0 flex justify-between items-center md:px-10 px-5 border-t-2 border-[#686df85f]'>
                   <div className='md:text-lg text-sm flex gap-x-5 poppins-medium text-[#686df8]'>
                    <i className="ri-map-pin-line"></i>
                    <p>{location}</p>
                    </div> 
                   {userType==="user"?<button className='md:text-[1rem] text-sm md:px-5 md:py-3 px-3 py-2 bg-white rounded-full poppins-medium border-2 border-white hover:border-[#686df8]' onClick={handleApply}>Apply now</button>:<button className='px-5 py-3 bg-white rounded-full poppins-medium border-2 border-white text-gray-200 cursor-not-allowed' onClick={handleApply} disabled>Apply now</button>}
               </div>
          </div>
    </div>
  )
}

export default JobCard