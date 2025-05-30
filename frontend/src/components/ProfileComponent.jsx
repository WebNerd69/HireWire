import React, { useState } from 'react';

const ProfileComponent = () => {
     const [formData, setFormData] = useState({
          firstName: '',
          middleName: '',
          lastName: '',
          phone: '',
          country: '',
          state: '',
          district: '',
          address: ''
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({
               ...prev,
               [name]: value
          }));
     };

     const handleSubmit = () => {
          console.log('Form Data:', formData);
          // you can add API call or save logic here
     };

     return (
          <div className='w-full h-full'>
               {/* top section */}
               <div className='w-full h-[15%] px-10 flex items-center'>
                    <div className='flex items-center justify-center w-24 h-24 rounded-full bg-[#686df8]'>
                         <p className='poppins-semi-bold text-6xl text-white'>R</p>
                    </div>
                    <p className='text-3xl poppins-semi-bold px-10'>Hi Rudra! 👋</p>
               </div>

               {/* info section */}
               <div className='w-full h-[85%] poppins-medium px-10 flex flex-col gap-y-20 py-20 relative'>
                    <div className='w-full flex items-center justify-between'>
                         <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
                              <p className='text-sm text-zinc-900 absolute -top-3 bg-gray-50 px-2'>First name</p>
                              <input
                                   type="text"
                                   name="firstName"
                                   value={formData.firstName}
                                   onChange={handleChange}
                                   placeholder='First name'
                                   className='bg-transparent w-full h-full outline-none'
                              />
                         </div>
                         <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
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
                         <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
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

                    <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
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

                    <div className='w-full flex items-center justify-between'>
                         <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
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
                         <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
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
                         <div className='px-5 py-5 border-2 w-[30%] relative rounded-lg'>
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

                    <div className='px-5 py-5 border-2 w-[50%] h-[25%] relative rounded-lg'>
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
                         className='px-5 py-3 bg-gray-200 absolute rounded-full bottom-10 hover:bg-[#686df8] hover:text-white transition-colors duration-300'
                    >
                         Save changes
                    </button>
               </div>
          </div>
     );
};

export default ProfileComponent;
