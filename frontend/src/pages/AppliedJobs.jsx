import React, { useContext, useEffect, useState } from 'react'
import AppliedJobCard from '../components/AppliedJobCard'
import App from '../App'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const AppliedJobs = () => {

  const { backendURL, userData } = useContext(AppContext)
  const [appliedJobs, setAppliedJobs] = useState([])
  const userId = userData?._id;
  console.log(userData)

  const fetchAppliedJobs = async () => {
    if (!userId) {
      toast.error("User ID is missing");
      return;
    }

    try {
      const response = await axios.get(`${backendURL}/api/jobApplication/by-user/${userId}`, {
      });

      console.log("Fetched applied jobs:", response.data);

      if (response.data?.applications?.length > 0) {
        setAppliedJobs(response.data.applications);
      } else {
        toast.info("You have not applied to any jobs");
        setAppliedJobs([]); // Clear if no applications
      }
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
      toast.error("Something went wrong while fetching applied jobs");
    }
  };

  useEffect(() => {
    fetchAppliedJobs();
  }, [userId]);

  useEffect(() => {
    console.log(appliedJobs)
  }, [])

  return (
    <div className='w-full flex flex-col gap-y-10 items-center px-10 py-20 relative'>
      {/* <div className='fixed sarina-regular text-[#686df844] text-[200vh] left-0 -z-10 blur-xl -top-[80vh]'>h</div> */}
      <div className='poppins-semi-bold md:text-6xl text-2xl h-[20vh] flex items-center justify-center tracking-wide'>
        Your Job <span className='text-white bg-[#686df8] px-2 py-3'>Applications</span>
      </div>
      <div className='flex flex-col w-screen items-center gap-y-10'>

      {appliedJobs.map((job, index) => (
        <AppliedJobCard key={index} {...job} />
      ))}
      </div>
    </div>
  )
}

export default AppliedJobs