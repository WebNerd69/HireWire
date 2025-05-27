import React from 'react'

const CategoryItem = ({type,num}) => {
     let op = "opening"
     if (num>1){
          op="openings"
     }
  return (
    <div className='bg-white rounded-xl min-h-[70px] flex justify-between items-center px-5 shadow-md hover:cursor-pointer'>
          <p className='text-xl poppins-medium'>{type}</p>
          <p className='poppins-light-italic text-sm text-gray-600'>{`${num} ${op}`}</p>
    </div>
  )
}

export default CategoryItem