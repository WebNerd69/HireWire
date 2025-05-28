import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [currentState, setCurrentState] = useState('login')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center relative bg-[#eeefff]'>
      <span className='sarina-regular text-[160vh] absolute left-14 text-[#686df8]'>h</span>
      <div className='w-[40%] h-[50%] bg-[#ffffff90] rounded-xl shadow-xl flex flex-col gap-y-5 justify-center items-center z-10 backdrop-blur-xl poppins-medium'>
        {currentState === 'login' && (<div className='w-full h-full flex flex-col gap-y-5 justify-center items-center'>
          <p className='text-4xl poppins-semi-bold text-[#686df8]'>Login</p>
          <div className='flex flex-col gap-y-5 w-full justify-center items-center'>
            <div className='w-[60%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-transparent outline-none' 
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='w-[60%] bg-gray-50 px-10 py-3 rounded-full flex justify-between items-center border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type={isPasswordVisible ? "text" : "password"} 
                placeholder='Password' 
                className='w-full bg-transparent outline-none' 
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <i className={isPasswordVisible ? "ri-eye-close-line text-xl text-[#686df8] cursor-pointer font-bold" : "ri-eye-line text-xl text-[#686df8] cursor-pointer font-bold"} onClick={() => setIsPasswordVisible(!isPasswordVisible)}></i>
            </div>
            <button className='w-[20%] bg-gray-100 text-slate-900 hover:bg-[#686df8] hover:text-white px-10 py-3 rounded-full poppins-medium transition-all duration-300'>Login</button>
          </div>
        </div>)}
        {currentState === 'signup' && (<div className='w-full h-full flex flex-col gap-y-5 justify-center items-center'>
          <p className='text-4xl poppins-semi-bold text-[#686df8]'>Sign Up</p>
          <div className='flex flex-col gap-y-5 w-full justify-center items-center'>
            <div className='w-[60%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="text" 
                placeholder='Name' 
                className='w-full bg-transparent outline-none' 
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className='w-[60%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-transparent outline-none' 
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='w-[60%] bg-gray-50 px-10 py-3 rounded-full flex justify-between items-center border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type={isPasswordVisible ? "text" : "password"} 
                placeholder='Password' 
                className='w-full bg-transparent outline-none' 
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <i className={isPasswordVisible ? "ri-eye-close-line text-xl text-[#686df8] cursor-pointer font-bold" : "ri-eye-line text-xl text-[#686df8] cursor-pointer font-bold"} onClick={() => setIsPasswordVisible(!isPasswordVisible)}></i>
            </div>
            <button className='w-[20%] bg-gray-100 text-slate-900 hover:bg-[#686df8] hover:text-white px-10 py-3 rounded-full poppins-medium transition-all duration-300'>Sign Up</button>
          </div>
        </div>)}
        {currentState === 'login' && (<p className='absolute bottom-10 left-14 text-sm text-gray-500' >Don't have an account? <span className='text-[#686df8] cursor-pointer ' onClick={() => setCurrentState('signup')}>Sign up</span></p>)}
        {currentState === 'signup' && (<p className='absolute bottom-10 left-14 text-sm text-gray-500' >Already have an account? <span className='text-[#686df8] cursor-pointer ' onClick={() => setCurrentState('login')}>Login</span></p>)}
      </div>
    </div>
  )
}

export default Login