import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CategoryItem = ({type}) => {
  const {navigate} = useContext(AppContext)
  const navToHiring =()=>{
    navigate("/hiring")
  }
  return (
    <div className='bg-white rounded-xl min-h-[70px] flex justify-between items-center px-5 shadow-md hover:cursor-pointer' onClick={navToHiring}>
          <p className='text-xl poppins-medium'>{type}</p>
    </div>
  )
}

export default CategoryItem