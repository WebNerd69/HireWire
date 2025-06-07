import React, { useContext } from 'react'
import CategoryItem from './CategoryItem'
import JobCard from './JobCard'
import { AppContext } from '../context/AppContext'

const RecomendedSection = () => {
     const { jobs } = useContext(AppContext)
     const types = [
          { type: "💻 Software" },
          { type: "✒️ Design " },
          { type: "🏡 Architecture" },
          { type: "⚙️ Engineering" },
          { type: "🔊 Marketing" },
          { type: "🙎‍♂️ Human Resource" },
          { type: "🧑‍⚖️ Legal" },
     ]
     return (
          <div className='w-[100vw] h-[100vh] bg-gray-100 flex justify-center items-center relative flex-col'>
               <div className='w-[100%] flex md:justify-between md:px-20 px-5'>
                    <div className=' px-5'>
                         <p className='text-4xl poppins-semi-bold text-slate-900'>Recomended jobs</p>
                         <p className='text-sm text-gray-500 poppins-light-italic'>Explore for new jobs here.</p>
                    </div>
                    {/* <div className=' flex gap-x-5 px-12'>
                         <button className='px-5 py-2 poppins-medium rounded-full bg-[#686df8] border-2 border-gray-100 hover:border-gray-200 text-white'>Popular jobs</button>
                         <button className='px-5 py-2 poppins-medium rounded-full bg-gray-200 border-2 border-gray-100 hover:border-[#686df8]'>Premium jobs</button>
                    </div> */}
               </div>
               <div className='w-[100%] h-[80vh] flex md:justify-evenly md:items-center flex-col md:flex-row '>
                    <div className='md:h-[90%] h-[40%] md:w-[25%] w-[100%] flex md:flex-col md:gap-y-2 overflow-hidden flex-wrap md:flex-nowrap px-2 gap-x-3 py-5 md:py-2'>
                         <div className='bg-white rounded-xl md:min-h-[70px] h-10 flex justify-between items-center px-5 shadow-md hover:cursor-pointer sticky top-0'>
                              <p className='poppins-semi-bold md:text-2xl text-sm '>Job Categories</p>
                         </div>
                         {types.map((value, index) => {
                              return (<CategoryItem key={index} type={value.type} />)
                         })}
                    </div>
                    <div className='h-[90%] md:w-[55%] w-full flex flex-col md:gap-y-20  gap-y-5 overflow-auto md:items-end md:px-10 px-3 items-center'>
                         {jobs.map((value, index) => {
                              return (
                                   <JobCard
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

          </div>
     )
}

export default RecomendedSection