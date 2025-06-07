import React, { useContext, useEffect, useState } from 'react'
import Hero2 from '../components/Hero2'
import JobCard from '../components/JobCard'
import App from '../App'
import { AppContext } from '../context/AppContext'

const Category = ({ onClick, category, isActive }) => {
   return (
      <button className={`md:px-5 md:py-2 px-3 py-1 md:text-[1rem] text-[.7rem] rounded-full border-2 ${isActive ? 'bg-[#686DF8] border-[#686DF8] text-white' : 'bg-gray-100 text-black border-gray-100'} hover:border-[#686DF8] hover:cursor-pointer poppins-medium`} onClick={onClick}>
         {category}
      </button>
   )
}

const Hiring = () => {
   const { jobs, searchValue, searchBy } = useContext(AppContext)
   console.log(jobs)

   const [filterVisible, setFilterVisible] = useState(true)
   const [filteredJobs, setFilteredJobs] = useState(jobs)
   const [category, setCategory] = useState("")

   const toggleFilterVisible = () => {
      setFilterVisible(!filterVisible)
   }
   const setcategoryHandler = (cat) => {
      if (category === cat) {
         setCategory("")
         filterByCategory("")
      } else {
         setCategory(cat)
         filterByCategory(cat)
      }
   }

   const filterByCategory = (cat) => {
      console.log(cat)
      if (cat === "") {
         setFilteredJobs(jobs)
      } else {
         const filteredData = jobs.filter(job => job.jobCategory === cat)
         console.log(filteredData)
         setFilteredJobs(filteredData)
      }
   }

   const filterBySearch = () => {
      setCategory('')
      if (searchBy === 'location') {
         const filteredData = jobs.filter(job => job.jobLocation.toLowerCase().includes(searchValue))
         setFilteredJobs(filteredData)
      } else {
         const filteredData = jobs.filter(job => job.jobTitle.toLowerCase().includes(searchValue))
         setFilteredJobs(filteredData)

      }
   }

   useEffect(() => {
      filterBySearch()
   }, [searchBy, searchValue])

   const categories = ["Software", "Engineering", "Design", "Architecture", "Marketing", "HR", "Legal"];

   return (
      <div className='w-full flex flex-col'>
         <Hero2 />
         <div className='w-full md:h-32 flex md:justify-between md:px-32 px-5 items-center md:py-10 py-3'>
            <button className={filterVisible ? 'poppins-medium md:text-lg text-[.7rem] md:px-5 md:py-2 w-20 px-3 py-2 bg-[#686DF8] text-white rounded-xl cursor-pointer' : 'poppins-medium md:text-lg text-[.7rem] md:px-5 md:py-2 w-20 px-3 py-2 bg-gray-200 text-zinc-900 rounded-xl cursor-pointer'} onClick={toggleFilterVisible}>Filters <i className="ri-filter-3-fill"></i></button>
            <div className='flex gap-x-5 overflow-x-auto items-center justify-start w-[90%] px-5'>
               {filterVisible && categories.map((cat) => (
                  <Category
                     key={cat}
                     onClick={() => setcategoryHandler(cat)}
                     category={cat}
                     isActive={category === cat}
                  />
               ))}
            </div>
         </div>
         <div className='w-full flex py-5 poppins-light-italic items-center justify-center text-sm text-zinc-600'>
            <p>{`found ${filteredJobs.length} result(s)`}</p>
         </div>
         <div className='h-full w-full flex flex-col gap-y-10 items-center px-10'>
            {Array.isArray(filteredJobs) && filteredJobs.length > 0 ? (
               filteredJobs.map((value, index) => (
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
               ))
            ) : (

               <div className='w-full h-60 flex justify-center items-center poppins-medium text-xl '>Oops! No such jobs are available</div>
            )}
         </div>
      </div>
   )
}

export default Hiring