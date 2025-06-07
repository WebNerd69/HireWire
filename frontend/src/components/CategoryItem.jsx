import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CategoryItem = ({type}) => {
  const {navigate} = useContext(AppContext)
  const navToHiring =()=>{
    navigate("/hiring")
  }
  return (
    <div className='bg-white rounded-xl md:min-h-[70px] h-10 flex justify-between items-center md:px-5 px-3 shadow-md hover:cursor-pointer' onClick={navToHiring}>
          <p className='md:text-xl text-sm poppins-medium'>{type}</p>
    </div>
  )
}

export default CategoryItem