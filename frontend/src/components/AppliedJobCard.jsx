import React from 'react'

const AppliedJobCard = ({company , type , time , title , salary , country , city , status}) => {

     const statusColor = {
          "Applied": "bg-yellow-100",
          "Shortlisted": "bg-orange-200",
          "Interview": "bg-blue-300",
          "Hired": "bg-emerald-300",
          "Rejected": "bg-red-300",
          "Cancelled": "bg-gray-300"
     }
     
  return (
     <div className='w-[70%] min-h-[240px] bg-white rounded-3xl overflow-hidden relative flex justify-center' id='jobcard'>
     {/* <div className='h-full w-2 absolute left-0 top-0 bg-red-400'></div> */}
     <div className='flex flex-col gap-y-3 relative w-full px-20 py-7'>
          <div className='flex w-full gap-x-16 poppins-light text-gray-400 text-sm'>
               <p>{company}</p>
               <p>{type}</p>
               <p>{time}</p>
          </div>
          
          <div className='w-[90%] flex justify-between flex-col'> 
               <p className='poppins-medium text-3xl'>{title}</p>             
               <p className='poppins-light-italic text-gray-400'>{salary}</p>
          </div>

          <div className='w-[100%] h-[33%] bg-[#686df82e] absolute -left-0 -bottom-0 flex justify-between items-center px-10 border-t-2 border-[#686df85f]'>
              <div className='text-lg flex gap-x-5 poppins-medium text-[#686df8]'>
               <i className="ri-map-pin-line"></i>
               <p>{country}</p>
               <p>|</p>
               <p>{city}</p>
               </div> 
               <div className='flex gap-x-5'>

              <p className={`px-5 py-3 rounded-full poppins-medium ${statusColor[status]}`}>{status}</p>
              {status !== "Cancelled" && status !== "Hired" && status !== "Rejected" && <button className='px-5 py-3 bg-red-100 rounded-full poppins-medium  hover:bg-red-200'>Cancel</button>}
               </div>
          </div>
     </div>
</div>
  )
}

export default AppliedJobCard