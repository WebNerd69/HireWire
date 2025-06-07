import React, { useContext, useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
const UserData = () => {
  const { backendURL } = useContext(AppContext)
  const { id } = useParams()
  const [userData , setUserData] = useState({})
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/user/get-user/${id}`);
      if (response.data.success) {
        const resumeData = response.data.user.resume;
        console.log(resumeData)
        setUserData(resumeData);
      } else {
        console.log("Failed to fetch user");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='md:px-24 py-24 px-5  flex flex-col gap-y-10 bg-gray-50'>
      {/* personal info */}
      <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
        <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold poppins-medium'>Personal information</p>
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          {/* First, Middle, Last Name */}
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              First name
            </p>
            <p className="poppins-medium test-lg py-3">{userData.firstName}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center '>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              Middle name
            </p>
            <p className="poppins-medium test-lg py-3">{userData.middleName}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center '>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              Last name
            </p>
            <p className="poppins-medium test-lg py-3">{userData.lastName}</p>
          </div>

        </div>

        <div className='md:w-[65%] flex md:items-center justify-between flex-col md:flex-row gap-y-3' >
          {/* Phone & Email */}

          <div className='px-5 py-2 border-2 md:w-[46%] relative rounded-lg flex items-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              Phone
            </p>
            <p className="poppins-medium test-lg py-3">{userData.phone}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[46%] relative rounded-lg flex items-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              Email
            </p>
            <p className="poppins-medium test-lg py-3">{userData.email}</p>
          </div>
        </div>
      </div>

      {/* links */}
      <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
        <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Links</p>
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>

          <div
            onClick={() => window.open(userData.linkedIn,"_blank")}
            className='cursor-pointer px-5 py-3 border-2 md:w-[30%] relative rounded-lg flex items-center '
          >
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              LinkedIn
            </p>
            <span>{userData.linkedIn}</span>
          </div>

          <div
            onClick={() => window.open(userData.gitHub,"_blank")}
            className='cursor-pointer px-5 py-3 border-2 md:w-[30%] relative rounded-lg flex items-center '
          >
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              GitHub
            </p>
            <span>{userData.gitHub}</span>
          </div>

          <div
            onClick={() => window.open(userData.portfolio,"_blank")}
            className='cursor-pointer px-5 py-3 border-2 md:w-[30%] relative rounded-lg flex items-center '
          >
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>
              Portfolio
            </p>
            <span>{userData.portfolio}</span>
          </div>

        </div>


      </div>

      {/* Education */}
      <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
        <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Education</p>
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center '>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Degree 1</p>
            <p className="poppins-medium test-lg py-3">{userData.degree1Name}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center '>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Start date</p>
            <p className="poppins-medium test-lg py-3">{userData.degree1StartDate}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center '>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>End date</p>
            <p className="poppins-medium test-lg py-3">{userData.degree1EndDate}</p>
          </div>
        </div>

        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Degree 2</p>
            <p className="poppins-medium test-lg py-3">{userData.degree2Name}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Start date</p>
            <p className="poppins-medium test-lg py-3">{userData.degree2StartDate}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>End date</p>
            <p className="poppins-medium test-lg py-3">{userData.degree2EndDate}</p>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className='px-5 py-2 border-2 md:w-[45%] relative rounded-xl min-h-20 flex items-center'>
        <p className='text-xl poppins-semi-bold text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Skills</p>
        <p className="poppins-medium test-lg py-3">{userData.skills}</p>
      </div>

      {/* projects */}
      <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
        <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Projects</p>
        {/* project 1 */}
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg flex item-center min-h-14'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Project 1 Name</p>
            <p className="poppins-medium test-lg py-3">{userData.project1Name}</p>
          </div>
          <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg flex item-center min-h-14'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Project link</p>
            <a href={userData.project1Link} target='_blank'>{userData.project1Link}</a>
          </div>
          <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg flex item-center min-h-14'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Project Description</p>
            <p className="poppins-medium test-lg py-3">{userData.project1Description}</p>
          </div>

        </div>
        {/* project 2 */}
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg flex item-center min-h-14'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Project 2 Name</p>
            <p className="poppins-medium test-lg py-3">{userData.project2Name}</p>
          </div>
          <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg flex item-center min-h-14'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Project link</p>
            <a href={userData.project2Link} target='_blank'>{userData.project2Link}</a>
          </div>
          <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg flex item-center min-h-14'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Project Description</p>
            <p className="poppins-medium test-lg py-3">{userData.project2Description}</p>
          </div>

        </div>


      </div>


      {/* certificates */}
      <div className='w-full px-10 py-10 rounded-xl border-2 relative flex flex-col justify-center gap-y-10'>
        <p className='text-xl text-zinc-900 absolute -top-4 bg-gray-50 px-2 poppins-semi-bold'>Certificates</p>
        {/* certificate 1 */}
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Certificate 1 Name</p>
            <p className="poppins-medium test-lg py-3">{userData.certificate1Name}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Serial number</p>
            <p className="poppins-medium test-lg py-3">{userData.certificate1SerialNumber}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Issueing Institute</p>
            <p className="poppins-medium test-lg py-3">{userData.certificate1IssueingInstitute}</p>
          </div>
        </div>
        {/* certificate 2 */}
        <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Certificate 2 Name</p>
            <p className="poppins-medium test-lg py-3">{userData.certificate2Name}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Serial number</p>
            <p className="poppins-medium test-lg py-3">{userData.certificate2SerialNumber}</p>
          </div>
          <div className='px-5 py-2 border-2 md:w-[30%] relative rounded-lg flex item-center'>
            <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-medium'>Issueing Institute</p>
            <p className="poppins-medium test-lg py-3">{userData.certificate2IssueingInstitute}</p>
          </div>
        </div>

      </div>


      {/* acheivements */}
      <div className='px-5 py-2 border-2 md:w-[45%] relative rounded-xl min-h-20 flex items-center'>
        <p className='text-xl poppins-semi-bold text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Acheivements</p>
        <p className="poppins-medium test-lg py-3">{userData.acheivements}</p>
      </div>

      {/* summary */}
      <div className='px-5 py-5 border-2 w-[100%] min-h-40  relative rounded-lg'>
        <p className='text-xl text-zinc-900 absolute -top-3 bg-gray-50 px-2 poppins-semi-bold'>Summary</p>
        <p className="poppins-medium test-lg px-5">{userData.summary}</p>
      </div>
      </div>
  )
}

export default UserData