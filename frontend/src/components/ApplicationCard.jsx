import React, { useContext, useEffect, useState } from 'react'
import "../App.css"
import { AppContext } from './../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const ApplicationCard = ({ id, userName, userId, jobId, date, status }) => {
     const { navigate, backendURL } = useContext(AppContext)
     const [jobData, setjobData] = useState({})
     function getDaysAgoFromISO(isoDateString) {
          const now = new Date();
          const pastDate = new Date(isoDateString);

          const diffMs = now - pastDate;
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

          return (diffDays === 0 ? "Today" : `${diffDays} day(s) ago`);
     }
     const daysAgo = getDaysAgoFromISO(date)

     const handleApplicationDetails = () => {
          navigate(`/user-data/${userId}`)
     }
     const handleSelectChange = async (e) => {
          try {
               const response = await axios.patch(`${backendURL}/api/jobApplication/${id}`, { action: "updateStatus", status: e.target.value })
               if (response.data.success) {
                    toast.success(response.data.message)
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error)
          }
     }
     const getJobDetails = async () => {
          try {
               const response = await axios.get(`${backendURL}/api/job/get/${jobId}`)
               if (response.data.success) {
                    setjobData(response.data.job)
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error)
          }
     }
     useEffect(() => {
          getJobDetails()
     }, [])

     return (
          <>
               <div className='w-[90%] min-h-[240px] bg-white rounded-3xl overflow-hidden relative flex items-center flex-col' id='jobcard'>
                    <div className='flex flex-col gap-y-3 relative w-full md:px-20 px-5 md:py-7 py-3'>
                         <div className='flex w-full gap-x-16 poppins-light text-gray-400 text-sm'>
                              <p>{jobData.companyName}</p>
                              <p>{jobData.jobType}</p>
                              <p>{daysAgo}</p>
                         </div>

                         <div className='w-[90%] flex justify-between flex-col'>
                              <p className='poppins-medium text-3xl'>{jobData.jobTitle}</p>
                              <p className='poppins-light-italic text-gray-400'>{jobData.jobSalary}</p>
                         </div>

                    </div>
                    <div className='w-[100%] h-[45%] bg-[#686df82e] absolute -left-0 -bottom-0 flex justify-between items-center md:px-10 px-5 border-t-2 border-[#686df85f] text-[.7rem] md:text-lg'>
                         <div className='md:text-lg  flex gap-x-5 poppins-medium text-zinc-800'>
                              <p>{`Applicant : ${userName}`}</p>
                         </div>
                         <div className='flex md:gap-x-7 h-12 md:h-16'>
                              <select className={status === "rejected" ?"px-2 py-1 rounded-full border-2 border-[#686df8] poppins-medium mr-4 cursor-not-allowed":"px-2 py-1 rounded-full border-2 border-[#686df8] poppins-medium mr-4 cursor-pointer"}
                                   defaultValue=""
                                   onChange={handleSelectChange}
                                   disabled={status === "rejected" ? true : false}
                              >
                                   <option value="" disabled>
                                        {status || "Update status"}
                                   </option>
                                   <option value="shortlisted">Shortlisted</option>
                                   <option value="interview">Interview</option>
                                   <option value="rejected">Rejected</option>
                                   <option value="hired">Hired</option>
                              </select>
                              <button className='md:px-5 py-3 bg-white rounded-full poppins-medium border-2  hover:bg-[#686df8] hover:text-white w-32 md:w-52' onClick={handleApplicationDetails}>Applicant details</button>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ApplicationCard