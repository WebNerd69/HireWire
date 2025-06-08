import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ResumeComponent from './ResumeComponent';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
const JobComponent = () => {

  const { id } = useParams()

  const { backendURL, userData } = useContext(AppContext)
  const userId = userData._id
  const userName = `${userData.resume.firstName} ${userData.resume.middleName}  ${userData.resume.lastName}`
  const userResume = userData.resume
  const [jobData, setjobData] = useState({})
  const [isLoaded, setisLoaded] = useState(false)

  const getDaysAgoFromISO = (isoDateString) => {
    const now = new Date();
    const pastDate = new Date(isoDateString);

    const diffMs = now - pastDate;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return (diffDays === 0 ? "Today" : `${diffDays} day(s) ago`);
  }
  const fetchjobData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/job/get/${id}`)
      if (response.data.success) {
        setjobData(response.data.job)
        console.log(response.data.job)
        setisLoaded(true)
      } else {

        toast.error("Something went wrong!")
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    }
  };
  const handleApply = async () => {
    try {
      const response = await axios.post(`${backendURL}/api/jobApplication/apply/${id}`, { userId, userName, userResume })
      console.log(response)
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error("Something went wrong!")
        console.log(response.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchjobData()
  }, [])

  return (
    <div className={isLoaded ? 'w-screen min-h-screen  bg-gray-50 px-10 py-24' : ""}>
      {isLoaded ? <>
        <div className=' flex relative w-full md:items-start items-center justify-center flex-col'>
          <div className='md:w-[50%] w-[95%] flex flex-col gap-y-10 md:px-16'>
            <p className='md:text-5xl text-3xl poppins-semi-bold md:px-5 py-2 text-zinc-900' >{jobData.jobTitle}</p>
            <div className='flex items-center gap-x-20 text-sm text-gray-500 poppins-light'>
              <p>{jobData.companyName}</p>
              <p>{getDaysAgoFromISO(jobData.jobCreatedAt)}</p>
            </div>
            <div className='md:text-xl text-sm flex items-center gap-x-10 poppins-medium text-zinc-700 relative px-5 py-5 border-2  md:w-[60%] rounded-lg justify-between'>
              <p className='absolute px-1 md:-top-4 -top-3 bg-gray-50 poppins-medium text-[1rem]'>Job expectations</p>
              <p className='w-[33%] text-center'>{jobData.jobSalary}</p>
              <p className='w-[33%] text-center'>{jobData.jobType}</p>
              <p className='w-[33%] text-center'>{jobData.jobCategory}</p>
            </div>

            <div className='poppins-medium text-xl px-5 py-5 gap-x-10 rounded-lg  border-2 border-[#8f92ff9c] text-[#686df8] md:max-w-[45%] flex items-center  relative'>
              <p className=' text-[1rem] absolute -top-4 bg-gray-50 px-1 left-5'>Job Location</p>
              <i className="ri-map-pin-line pr-3"></i>
              <p>{jobData.jobLocation}</p>

            </div>

            <div className='relative cd:px-5 px-3 py-9 w-full rounded-2xl border-2  gap-y-5 flex flex-col'>
              <p className='poppins-medium absolute md:-top-4 -top-3 px-1 bg-gray-50'>Job requirements</p>
              <p className='w-full md:text-[1.025rem] text-[.8rem] poppins-light p-7 rounded-lg'>{jobData.jobDescription}</p>
              <div className='flex items-center relative px-7'>
                <p className='poppins-semi-bold md:text-xl pr-3 '>Skills</p>
                <div className='w-[90%] flex items-center gap-x-5 flex-wrap gap-y-3'>
                  {jobData.jobTags.map((value, index) => (
                    <span className='poppins-medium md:text-lg text-[.7rem] px-2 py-1 rounded-lg bg-[#dddefd98] border-2 border-[#8f92ff9c] text-[#686df8] md:max-w-[25%] flex items-center justify-center ' key={index}>
                      {value}
                    </span>))}
                </div>
              </div>
            </div>

          </div>
          <div className='md:py-6 py-14'>
            <div className=' w-screen flex justify-center items-center text-2xl py-20 poppins-semi-bold'>
              <p>Your Resume</p>
            </div>
            <ResumeComponent id={userData._id} />
          </div>
        </div>
        <div className='flex w-full items-center justify-center'>

          <button className='px-7 py-3 rounded-full poppins-medium border-[#686df8] border-2 hover:bg-[#686df8] self-center text-zinc-600 bg-gray-200 hover:text-white text-xl ' onClick={handleApply}>Apply now</button>
        </div>
      </> :
        <div className='w-screen h-screen flex items-center justify-center poppins-semi-bold text-4xl'>
          <p>Oops! Something went wrong!</p>
        </div>

      }
    </div>
  )
}

export default JobComponent