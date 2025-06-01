import React, { useState } from 'react'

const createJobs = () => {
     const [formData, setformData] = useState(
          {
               companyName: "",
               jobTitle: "",
               jobDescription: "",
               jobLocation: "",
               jobType: "",
               jobSalary: "",
               jobCategory: "",
               jobTags: ""
          }
     )
     const handleChange = (e) => {
          setformData({ ...formData, [e.target.name]: e.target.value })
     }
     const handleSubmit = (e) => {
          e.preventDefault()
          console.log(formData)
     }
     return (
          <div className='w-full h-full flex flex-col px-10 py-10 items-center'>
               <p className='text-3xl poppins-semi-bold pb-10 w-full text-start'>Create Job</p>
               <form onSubmit={handleSubmit} className=' h-full flex flex-col poppins-medium w-[70%] gap-y-10'>
                    <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                         <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Company name</p>
                         <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder='ABCD'
                              className='bg-transparent w-full h-full outline-none'
                         />
                    </div>
                    <div className='flex justify-between '>
                         <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job title</p>
                              <input
                                   type="text"
                                   name="jobTitle"
                                   value={formData.jobTitle}
                                   onChange={handleChange}
                                   placeholder='Software engineer'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                         <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job location</p>
                              <input
                                   type="text"
                                   name="jobLocation"
                                   value={formData.jobLocation}
                                   onChange={handleChange}
                                   placeholder='Bangaluru | India'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                    </div>
                    <div className='flex justify-between '>
                         <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job Tags</p>
                              <input
                                   type="text"
                                   name="jobTags"
                                   value={formData.jobTags}
                                   onChange={handleChange}
                                   placeholder='MERN React Node'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>

                         <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job salary</p>
                              <input
                                   type="text"
                                   name="jobSalary"
                                   value={formData.jobSalary}
                                   onChange={handleChange}
                                   placeholder='12lps-15lpa'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                    </div>

                    <div className='px-5 py-5 border-2 w-full h-[25%] relative rounded-lg'>
                         <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job description</p>
                         <textarea
                              name="jobDescription"
                              value={formData.jobDescription}
                              onChange={handleChange}
                              placeholder='Job description'
                              className='bg-transparent w-full h-full outline-none resize-none'
                         />
                    </div>
                    <div className='flex justify-between '>
                         <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job type</p>
                              <select
                                   name="jobType"
                                   value={formData.jobType}
                                   onChange={handleChange}
                                   className='bg-transparent w-full h-full outline-none hover:cursor-pointer'
                              >
                                   <option value="">Select Job Type</option>
                                   <option value="Remote">Remote</option>
                                   <option value="OnSite">OnSite</option>
                                   <option value="Hybrid">Hybrid</option>
                              </select>
                         </div>
                         <div className='px-5 py-5 border-2 w-[40%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Job Category</p>
                              <select
                                   name="jobCategory"
                                   value={formData.jobCategory}
                                   onChange={handleChange}
                                   className='bg-transparent w-full h-full outline-none'
                              >
                                   <option value="">Select Job Category</option>
                                   <option value="Software">Software</option>
                                   <option value="Engineering">Engineering</option>
                                   <option value="Design">Design</option>
                                   <option value="Construction">Construction</option>
                                   <option value="Marketing">Marketing</option>
                                   <option value="Sales">Sales</option>
                                   <option value="Finance">Finance</option>
                              </select>
                         </div>
                    </div>


                    <button className='px-7 py-3 bg-gray-200 absolute rounded-full bottom-10 hover:bg-[#686df8] hover:text-white transition-colors duration-300'>Publish</button>
               </form>
          </div>
     )
}

export default createJobs