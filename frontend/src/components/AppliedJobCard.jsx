import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const AppliedJobCard = ({ _id, jobId, userId, userName, status }) => {

     const { backendURL } = useContext(AppContext)
     const [jobData, setjobData] = useState({})
     const fetchjobData = async () => {
          try {
               const response = await axios.get(`${backendURL}/api/job/get/${jobId}`)
               if (response.data.success) {
                    setjobData(response.data.job)
               } else {
                    toast.error("Oops!\nSomething went wrong")
               }
          } catch (error) {
               console.log(error)
          }
     }

     const getDaysAgoFromISO = (isoDateString) => {
          const now = new Date();
          const pastDate = new Date(isoDateString);

          const diffMs = now - pastDate;
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

          return (diffDays === 0 ? "Today" : `${diffDays} day(s) ago`);
     }

     const cancelhandler = async (applicationId)=>{
          try {
               const action = "cancel"
               const response = await axios.patch(`${backendURL}/api/jobApplication/${applicationId}`,{action})
               if (response.data.success) {
                    // setjobData(response.data.application)
                    toast.success(response.data.message)
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error)
          }
     }
     const statusColor = {
          "applied": "bg-yellow-100",
          "shortlisted": "bg-orange-200",
          "interview": "bg-blue-300",
          "hired": "bg-emerald-300",
          "rejected": "bg-red-300",
          "Cancelled": "bg-gray-300"
     }

     useEffect(() => {
          fetchjobData()
     }, [])

     return (
          <div className='w-[70%] min-h-[240px] bg-white rounded-3xl overflow-hidden relative flex justify-center' id='jobcard'>
               {/* <div className='h-full w-2 absolute left-0 top-0 bg-red-400'></div> */}
               <div className='flex flex-col gap-y-3 relative w-full px-20 py-7'>
                    <div className='flex w-full gap-x-16 poppins-light text-gray-400 text-sm'>
                         <p>{jobData.companyName}</p>
                         <p>{jobData.jobType}</p>
                         <p>{getDaysAgoFromISO(jobData.jobCreatedAt)}</p>
                    </div>

                    <div className='w-[90%] flex justify-between flex-col'>
                         <p className='poppins-medium text-3xl'>{jobData.jobTitle}</p>
                         <p className='poppins-light-italic text-gray-400'>{jobData.jobSalary}</p>
                    </div>

                    <div className='w-[100%] h-[33%] bg-[#686df82e] absolute -left-0 -bottom-0 flex justify-between items-center px-10 border-t-2 border-[#686df85f]'>
                         <div className='text-lg flex gap-x-5 poppins-medium text-[#686df8]'>
                              <i className="ri-map-pin-line"></i>
                              <p>{jobData.jobLocation}</p>
                         </div>
                         <div className='flex gap-x-5'>

                              <p className={`px-5 py-3 rounded-full poppins-medium ${statusColor[status]}`}>{status}</p>
                              {status !== "Cancelled" && status !== "hired" && status !== "rejected" && <button className='px-5 py-3 bg-red-100 rounded-full poppins-medium  hover:bg-red-200' onClick={()=>cancelhandler(_id)}>Cancel</button>}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AppliedJobCard