import React from 'react'
import AppliedJobCard from '../components/AppliedJobCard'
const AppliedJobs = () => {
  const appliedJobs = [
    {company:"Google", type:"Temporary" , time:"2 days ago" , title:"Data Analyst" , salary:"150k-350k anually" , country:"India" , city:"Bangaluru", status:"Applied"},
    {company:"Cognizen", type:"Temporary" , time:"25 days ago" , title:"Data visualization specialist" , salary:"150k-250k anually" , country:"India" , city:"Delhi", status:"Shortlisted"},
    {company:"Wipro", type:"Temporary" , time:"2 days ago" , title:"SD1" , salary:"70k-90k anually" , country:"India" , city:"Bangaluru", status:"Rejected"},
    {company:"DRDO", type:"Permanent" , time:"29 days ago" , title:"Software developer" , salary:"750k-990k anually" , country:"India" , city:"Hydrabad", status:"Interview"},
    {company:"HAL", type:"Intern" , time:"2 days ago" , title:"Bam banayenge" , salary:"150k-350k anually" , country:"India" , city:"Ghaziabad", status:"Hired"},
    {company:"OnlyFans", type:"Intern" , time:"2 days ago" , title:"Pata hi hoga👀" , salary:"150k-350k anually" , country:"UK" , city:"London", status:"Cancelled"},
]
  return (
    <div className='w-full flex flex-col gap-y-10 items-center px-10 py-20 relative'>
      {/* <div className='fixed sarina-regular text-[#686df844] text-[200vh] left-0 -z-10 blur-xl -top-[80vh]'>h</div> */}
      <div className='poppins-semi-bold text-6xl h-[20vh] flex items-center justify-center tracking-wide'>Your Job <span className='text-white bg-[#686df8] px-2 py-3'>Applications</span></div>
      {appliedJobs.map((job, index) => (
      <AppliedJobCard key={index} {...job} />
      ))}
    </div>
  )
}

export default AppliedJobs