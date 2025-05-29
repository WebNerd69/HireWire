import React, { useState } from 'react'
import Hero2 from '../components/Hero2'
import JobCard from '../components/JobCard'

const Category = ({onClick, category, isActive}) => {
  return (
    <div className={`px-5 py-2 rounded-full border-2 ${isActive ? 'bg-[#686DF8] border-[#686DF8] text-white' : 'bg-gray-100 text-black border-gray-100'} hover:border-[#686DF8] hover:cursor-pointer poppins-medium`} onClick={onClick}>
      <p>{category}</p>
    </div>
  )
}

const Hiring = () => {
  const jobs = [
    {company:"Google", type:"Temporary" , time:"2 days ago" , title:"Data Analyst" , salary:"150k-350k anually" , country:"India" , city:"Bangaluru"},
    {company:"Cognizen", type:"Temporary" , time:"25 days ago" , title:"Data visualization specialist" , salary:"150k-250k anually" , country:"India" , city:"Delhi"},
    {company:"Wipro", type:"Temporary" , time:"2 days ago" , title:"SD1" , salary:"70k-90k anually" , country:"India" , city:"Bangaluru"},
    {company:"DRDO", type:"Permanent" , time:"29 days ago" , title:"Software developer" , salary:"750k-990k anually" , country:"India" , city:"Hydrabad"},
    {company:"HAL", type:"Intern" , time:"2 days ago" , title:"Bam banayenge" , salary:"150k-350k anually" , country:"India" , city:"Ghaziabad"},
  ]

  const [category, setCategory] = useState();
  const categories = ["Software", "Engineering", "Design", "Architecture", "Marketing", "Sales", "Finance", "HR", "Legal", "Customer Support"];

  return (
    <div className='w-full flex flex-col'>
      <Hero2 />
      <div className='w-full h-32 flex justify-evenly items-center py-10'>
        <p className='poppins-medium text-lg px-5 py-2 bg-[#686DF8] text-white rounded-xl '>Filters <i className="ri-filter-3-fill"></i></p>
        <div className='flex gap-x-5 overflow-x-auto'>
          {categories.map((cat) => (
            <Category 
              key={cat}
              onClick={() => setCategory(cat)} 
              category={cat}
              isActive={category === cat}
            />
          ))}
        </div>
      </div>
      <div className='h-full w-full flex flex-col gap-y-10 items-center px-10'>
        {jobs.map((value, index) => (
          <JobCard 
            key={index}
            company={value.company} 
            type={value.type} 
            time={value.time} 
            title={value.title} 
            salary={value.salary} 
            country={value.country} 
            city={value.city} 
          />
        ))}
      </div>
    </div>
  )
}

export default Hiring