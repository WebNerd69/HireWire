import React, { useContext } from 'react'
import "../App.css"
import { AppContext } from './../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const MyJobCard = ({company , type , date , title , salary , location , id}) => {

     const {backendURL , token , fetchJobs} = useContext(AppContext)

     function getDaysAgoFromISO(isoDateString) {
          const now = new Date();
          const pastDate = new Date(isoDateString);
        
          const diffMs = now - pastDate;
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
          return (diffDays === 0 ? "Today" : `${diffDays} day(s) ago`);
        }
     const daysAgo = getDaysAgoFromISO(date)

     const handleDelete = async()=>{
          try {
               const response = await axios.delete(`${backendURL}/api/job/delete-job/${id}`,{headers:{token}})
               if (response.data.success) {
                    toast.success("Job deleted Successfully")
                    fetchJobs()
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error)
          }
     }
  return (
    <div className='w-[90%] min-h-[240px] bg-white rounded-3xl overflow-hidden relative flex justify-center' id='jobcard'>
          {/* <div className='h-full w-2 absolute left-0 top-0 bg-red-400'></div> */}
          <div className='flex flex-col gap-y-3 relative w-full md:px-20 px-5 md:py-7 py-5'>
               <div className='flex w-full gap-x-16 poppins-light text-gray-400 md:text-sm text-[.7rem]'>
                    <p>{company}</p>
                    <p>{type}</p>
                    <p>{daysAgo}</p>
               </div>
               
               <div className='w-[90%] flex justify-between flex-col'> 
                    <p className='poppins-medium md:text-3xl text-xl'>{title}</p>             
                    <p className='poppins-light-italic text-gray-400'>{salary}</p>
               </div>

               <div className='w-[100%] h-[33%] bg-[#686df82e] absolute -left-0 -bottom-0 flex justify-between items-center md:px-10 px-5 border-t-2 border-[#686df85f]'>
                   <div className='md:text-lg text-[.8rem] flex md:gap-x-5 gap-x-2 poppins-medium text-[#686df8]'>
                    <i className="ri-map-pin-line"></i>
                    <p>{location}</p>
                    </div> 
                   <button className='px-5 py-3 bg-red-500 rounded-full poppins-medium border-2  hover:bg-red-600 text-white'  onClick={handleDelete}>Delete</button>
               </div>
          </div>
    </div>
  )
}

export default MyJobCard