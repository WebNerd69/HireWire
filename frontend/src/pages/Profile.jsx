import React,{useState} from 'react'
import ProfileComponent from '../components/ProfileComponent'
import ResumeComponent from '../components/ResumeComponent'

const Profile = () => {
  const [show, setShow] = useState("profile")
  return (
    <div className='w-screen min-h-screen '>

      {/* left section */}
      <div className='w-screen min-h-[100vh] flex justify-between '>
        <div className='w-[5vw] h-full flex items-center flex-col py-10 gap-y-20'>
          <p className='sarina-regular text-3xl text-[#686df8]'>h</p>
          <p className='relative group cursor-pointer' onClick={()=>{setShow("profile")}}>
            <i className="ri-user-fill text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>profile</span>
          </p>
          <p className='relative group cursor-pointer' onClick={()=>{setShow("resume")}}>
            <i className="ri-profile-line text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>resume</span>
          </p>
          <p className='relative group cursor-pointer' onClick={()=>{setShow("openings")}}>
            <i className="ri-bubble-chart-line text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>openings</span>
          </p>
          <button className='absolute bottom-10 group'>
            <i className="ri-logout-box-r-line text-2xl text-red-500 hover:text-red-600"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>logout</span>
          </button>
        </div>
        {/* right section */}
        <div className='w-[95vw] bg-gray-50'>
          {show==="profile"&&<ProfileComponent/>}
          {show==="resume"&&<ResumeComponent/>}
        </div>
      </div>
    </div>
  )
}

export default Profile