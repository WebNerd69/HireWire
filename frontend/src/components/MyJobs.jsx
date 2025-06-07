import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import MyJobCard from './MyJobCard'

const MyJobs = () => {
     const { jobs, userData } = useContext(AppContext)
     const [filteredJobs, setFilteredJobs] = useState([])
     const filterJobs = () => {
          const filteredData = jobs.filter(job => job.author === userData._id)
          setFilteredJobs(filteredData)
          // console.log(filteredData)
     }
     useEffect(() => {
          filterJobs()
     }, [])

     return (
          <div className='w-full min-h-screen md:px-10 px-5'>
               <div className=' flex flex-col items-center gap-y-10'>
                    <p className='text-3xl poppins-semi-bold w-[90%]'>My jobs</p>
                    {filteredJobs.map((value, index) => {
                         return (
                              <MyJobCard
                                   id={value._id}
                                   key={index}
                                   company={value.companyName}
                                   type={value.jobType}
                                   date={value.jobCreatedAt}
                                   title={value.jobTitle}
                                   salary={value.jobSalary}
                                   location={value.jobLocation}
                                   description={value.jobDescription}
                                   category={value.jobCategory}
                                   tags={value.jobTags}
                              />
                         )
                    })}
               </div>
          </div>
     )
}

export default MyJobs