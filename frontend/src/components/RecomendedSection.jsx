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
     // const jobs = [
     //      {company:"Google", type:"Temporary" , time:"2 days ago" , title:"Data Analyst" , salary:"150k-350k anually" , country:"India" , city:"Bangaluru"},
     //      {company:"Cognizen", type:"Temporary" , time:"25 days ago" , title:"Data visualization specialist" , salary:"150k-250k anually" , country:"India" , city:"Delhi"},
     //      {company:"Wipro", type:"Temporary" , time:"2 days ago" , title:"SD1" , salary:"70k-90k anually" , country:"India" , city:"Bangaluru"},
     //      {company:"DRDO", type:"Permanent" , time:"29 days ago" , title:"Software developer" , salary:"750k-990k anually" , country:"India" , city:"Hydrabad"},
     //      {company:"HAL", type:"Intern" , time:"2 days ago" , title:"Bam banayenge" , salary:"150k-350k anually" , country:"India" , city:"Ghaziabad"},
     // ]
     return (
          <div className='w-[100vw] h-[100vh] bg-gray-100 flex justify-center items-center relative flex-col'>
               <div className='w-[100%] flex justify-between px-20'>
                    <div className=' px-12'>
                         <p className='text-4xl poppins-semi-bold text-slate-900'>Recomended jobs</p>
                         <p className='text-sm text-gray-500 poppins-light-italic'>Explore for new jobs here.</p>
                    </div>
                    {/* <div className=' flex gap-x-5 px-12'>
                         <button className='px-5 py-2 poppins-medium rounded-full bg-[#686df8] border-2 border-gray-100 hover:border-gray-200 text-white'>Popular jobs</button>
                         <button className='px-5 py-2 poppins-medium rounded-full bg-gray-200 border-2 border-gray-100 hover:border-[#686df8]'>Premium jobs</button>
                    </div> */}
               </div>
               <div className='w-[100%] h-[80vh] flex justify-evenly items-center '>
                    <div className='h-[90%] w-[25%] flex flex-col gap-y-5 overflow-hidden'>
                         <div className='bg-white rounded-xl min-h-[70px] flex justify-between items-center px-5 shadow-md hover:cursor-pointer sticky top-0'>
                              <p className='poppins-semi-bold text-2xl '>Job Categories</p>
                         </div>
                         {types.map((value, index) => {
                              return (<CategoryItem key={index} type={value.type} />)
                         })}
                    </div>
                    <div className='h-[90%] w-[55%] flex flex-col gap-y-20 overflow-auto items-end px-10'>
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