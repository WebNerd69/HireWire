import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import ApplicationCard from '../components/ApplicationCard';

const Applications = () => {
  const { backendURL, userData } = useContext(AppContext)
  const [applications, setApplications] = useState([])
  const fetchApplicationData = async () => {
    try {
      const partnerId = userData._id

      const response = await axios.get(`${backendURL}/api/jobApplication/by-author/${partnerId}`)
      if (response.data.success) {

        setApplications(response.data.applications)
        console.log(response.data.applications)
      } else {
        toast.error(response.data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApplicationData()
  },[])
  return (
    <div className='w-screen min-h-[100vh] relative'>
      <div className='w-full h-[33vh] flex justify-center items-center'>
        <p className='md:text-5xl text-2xl poppins-semi-bold text-zinc-800'>Review all the <span className='text-white px-3 py-1 bg-[#686df8]'>Job Applications</span></p>
      </div>
      <div className='w-full flex flex-col gap-y-20 items-center md:px-20 px-5 md:py-10 py-10'>
        {applications.length>0?
          applications.map((value,index)=>{
            return(
              <ApplicationCard
                date={value.createdAt}
                jobId={value.jobId}
                userName={value.userName}
                id={value._id}
                userId={value.userId}
                key={index}
                status={value.status}
              />
            )
          }):
          <div className='flex w-full h-full justify-center items-center poppins-semi-bold text-3xl'>
            <p >Oops! No job applications to show!</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Applications