import React, { useEffect, useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import ResumeComponent from '../components/ResumeComponent'
import CreateJobs from '../components/CreateJobs'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import MyJobs from '../components/MyJobs'
const Profile = () => {
  const { setLoginStatus, setToken, setUserData, setUserType, navigate, userType, userData } = useContext(AppContext)
  const [show, setShow] = useState("profile")
  const [Type, setType] = useState(userType)
  

  // logout handler
  const logOuthandler = () => {
    setLoginStatus(false)
    setToken(null)
    setUserData(null)
    setUserType(null)
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("loginStatus")
    toast.success("Logged out successfully")
    navigate('/')
  }

  useEffect(()=>{
    // console.log(userData)
    if (!userType) {
      
      setType(localStorage.getItem("userType"))
    }
  },[])
  return (
    <div className='w-screen max-h-[250vh]'>

      {/* left section */}
      <div className='w-screen min-h-[100vh] flex justify-between '>
        <div className='w-[5vw] h-full flex items-center flex-col py-10 gap-y-20'>
          <p className='sarina-regular text-3xl text-[#686df8]'>h</p>
          {userType === "user" && (<p className='relative group cursor-pointer' onClick={() => { setShow("profile") }}>
            <i className="ri-user-fill text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>profile</span>
          </p>)}
          {userType === "user" && (<p className='relative group cursor-pointer' onClick={() => { setShow("resume") }}>
            <i className="ri-profile-line text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>resume</span>
          </p>)}
          {userType === "partner" && <p className='relative group cursor-pointer' onClick={() => { setShow("profile") }}>
            <i className="ri-add-circle-line text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>create-job</span>
          </p>}
          {userType === "partner" && <p className='relative group cursor-pointer' onClick={() => { setShow("show jobs") }}>
            <i className="ri-file-list-3-line text-2xl flex flex-col items-center group-hover:text-[#686df8]"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>show-jobs</span>
          </p>}
          <button className='absolute bottom-10 group' onClick={logOuthandler}>
            <i className="ri-logout-box-r-line text-2xl text-red-500 hover:text-red-600"></i>
            <span className='px-2 py-1 bg-gray-200 poppins-medium text-sm rounded-lg text-center absolute top-0 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>logout</span>
          </button>
        </div>
        {/* right section */}
        <div className='w-[95vw] bg-gray-50'>
          <div className='w-full h-[15vh] px-10 flex items-center bg-gray-50'>
            <div className='flex items-center justify-center w-24 h-24 rounded-full bg-[#686df8]'>
              <p className='poppins-semi-bold text-6xl text-white'>{userData.name[0]}</p>
            </div>
            <p className='text-3xl poppins-semi-bold px-10'>{`Hi ${userData.name}! 👋`}</p>
          </div>
          {show === "profile" && Type==="user" &&<ProfileComponent />}
          {show === "resume" && Type==="user" && <ResumeComponent id={userData._id} />}
          {show === "profile" && Type==="partner" && <CreateJobs />}
          {show === "show jobs" && Type==="partner" && <MyJobs/>}
        </div>
      </div>
    </div>
  )
}

export default Profile