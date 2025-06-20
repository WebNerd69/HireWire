import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProfileComponent = () => {

     const { userData, backendURL, setUserData } = useContext(AppContext)

     const [formData, setFormData] = useState({

          name: "",
          middleName: "",
          lastName: "",
          phone: "",
          country: "",
          state: "",
          district: "",
          address: ""
     });
     useEffect(() => {
          try {        
            if (userData) {
              setFormData({
                name: userData.name || "",
                middleName: userData.middleName || "",
                lastName: userData.lastName || "",
                phone: userData.phone || "",
                country: userData.country || "",
                state: userData.state || "",
                district: userData.district || "",
                address: userData.address || "",
              });
            }
          } catch (error) {
            console.error("Invalid userData in localStorage:", error);
          //   localStorage.removeItem("userData"); // Clean up bad data
          }
        }, []);
        

     // functions
     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({
               ...prev,
               [name]: value
          }));
     };

     const handleSubmit = async () => {
          // console.log('Form Data:', formData);
          // you can add API call or save logic here
          try {
               const response = await axios.put(`${backendURL}/api/user/update-info/${userData._id}`, formData)
               if (response.data.success) {
                    toast.success("Profile updated successfully")
                    setUserData(prev=>({
                         ...prev,...formData
                    }))
                    localStorage.removeItem("userData")
                    localStorage.setItem("userData",JSON.stringify(userData))
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error)
          }
     };

     return (
          <div className='w-full h-full relative'>
               {/* info section */}
               <div className='w-full md:h-[85%] h-[100vh] poppins-medium px-10 flex flex-col gap-y-10 py-20 relative'>
                    <div className='w-full flex md:items-center justify-between flex-col md:flex-row gap-y-3'>
                         <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>First name</p>
                              <input
                                   type="text"
                                   name="name"
                                   value={formData.name}
                                   onChange={handleChange}
                                   placeholder='First name'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                         <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Middle name</p>
                              <input
                                   type="text"
                                   name="middleName"
                                   value={formData.middleName}
                                   onChange={handleChange}
                                   placeholder='Middle name'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                         <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Last name</p>
                              <input
                                   type="text"
                                   name="lastName"
                                   value={formData.lastName}
                                   onChange={handleChange}
                                   placeholder='Last name'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                    </div>

                    <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                         <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Phone</p>
                         <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder='+91-1234567890'
                              className='bg-transparent w-full h-full outline-none'
                         />
                    </div>

                    <div className='w-full flex md:items-center justify-between flex-col
                    md:flex-row gap-y-3'>
                         <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Country</p>
                              <input
                                   type="text"
                                   name="country"
                                   value={formData.country}
                                   onChange={handleChange}
                                   placeholder='Country'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                         <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>State</p>
                              <input
                                   type="text"
                                   name="state"
                                   value={formData.state}
                                   onChange={handleChange}
                                   placeholder='State'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                         <div className='px-5 py-5 border-2 md:w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>District</p>
                              <input
                                   type="text"
                                   name="district"
                                   value={formData.district}
                                   onChange={handleChange}
                                   placeholder='District'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                    </div>

                    <div className='px-5 py-5 border-2 md:w-[50%] h-[25%] relative rounded-lg'>
                         <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>Address</p>
                         <textarea
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder='Address'
                              className='bg-transparent w-full h-full outline-none resize-none'
                         />
                    </div>

                    <button
                         onClick={handleSubmit}
                         className='px-5 py-3 bg-gray-200 absolute rounded-full bottom-2 md:bottom-24 hover:bg-[#686df8] hover:text-white transition-colors duration-300'
                    >
                         Save changes
                    </button>
               </div>
          </div>
     );
};

export default ProfileComponent;
