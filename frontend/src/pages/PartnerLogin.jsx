import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const PartnerLogin = () => {

  const {backendURL , setToken , setLoginStatus , setUserData , setUserType , navigate } = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
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
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value)
  }
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${backendURL}/api/partner/login`, { email, password });
  
      if (response.data.success) {
        const { password, ...safePartner } = response.data.partner;
  
        // Store in state
        setToken(response.data.token);
        setLoginStatus(true);
        setUserData(safePartner);
        setUserType('partner');
  
        // Store in localStorage
        localStorage.setItem("partnerData", JSON.stringify(safePartner));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", safePartner._id);
        localStorage.setItem("userType", "partner");
  
        toast.success("Logged in successfully");
        navigate("/")
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong during login");
    }
  };
  
  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${backendURL}/api/partner/register`, {
        name,
        email,
        password,
        companyName
      });
  
      if (response.data.success) {
        const { password, ...safePartner } = response.data.partner;
  
        // Store in state
        setToken(response.data.token);
        setLoginStatus(true);
        setUserData(safePartner);
        setUserType('partner');
  
        // Store in localStorage
        localStorage.setItem("partnerData", JSON.stringify(safePartner));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", safePartner._id);
        localStorage.setItem("userType", "partner");
  
        toast.success("Profile created successfully");
        toast.success("Logged in successfully");
        navigate("/")
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong during registration");
    }
  };
  

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center relative overflow-hidden'>
      <span className='sarina-regular text-[160vh] absolute left-14 text-[#686df8] '>h</span>
      <div className='md:w-[40%] w-[90%] h-[60%] bg-[#ffffff90] rounded-xl shadow-xl flex flex-col gap-y-5 justify-center items-center z-10 backdrop-blur-xl poppins-medium'>
        {currentState === 'login' && (<div className='w-full h-full flex flex-col gap-y-5 justify-center items-center'>
          <p className='text-4xl poppins-semi-bold text-[#686df8]'>Partner Login</p>
          <div className='flex flex-col gap-y-5 w-full justify-center items-center'>
            <div className='md:w-[60%] w-[80%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-transparent outline-none' 
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='md:w-[60%] w-[80%] bg-gray-50 px-10 py-3 rounded-full flex justify-between items-center border-2 border-gray-50 hover:border-[#686df8]'>
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
            <button className='md:w-[20%] w-[40%] bg-gray-100 text-slate-900 hover:bg-[#686df8] hover:text-white px-10 py-3 rounded-full poppins-medium transition-all duration-300' onClick={handleLogin}>Login</button>
          </div>
        </div>)}
        {currentState === 'signup' && (<div className='w-full h-full flex flex-col gap-y-5 justify-center items-center'>
          <p className='text-4xl poppins-semi-bold text-[#686df8]'>Partner Sign Up</p>
          <div className='flex flex-col gap-y-5 w-full justify-center items-center'>
            <div className='md:w-[60%] w-[80%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="text" 
                placeholder='Name' 
                className='w-full bg-transparent outline-none' 
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className='md:w-[60%] w-[80%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="text" 
                placeholder='Company name' 
                className='w-full bg-transparent outline-none' 
                value={companyName}
                onChange={handleCompanyNameChange}
                required
              />
            </div>
            <div className='md:w-[60%] w-[80%] bg-gray-50 px-10 py-3 rounded-full border-2 border-gray-50 hover:border-[#686df8]'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full bg-transparent outline-none' 
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='md:w-[60%] w-[80%] bg-gray-50 px-10 py-3 rounded-full flex justify-between items-center border-2 border-gray-50 hover:border-[#686df8]'>
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
            <button className='md:w-[20%] w-[40%] bg-gray-100 text-slate-900 hover:bg-[#686df8] hover:text-white px-10 py-3 rounded-full poppins-medium transition-all duration-300' onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>)}
        {currentState === 'login' && (<p className='absolute md:bottom-10 md:left-14 bottom-5 left-5 text-sm text-gray-500' >Don't have an account? <span className='text-[#686df8] cursor-pointer ' onClick={() => setCurrentState('signup')}>Sign up</span></p>)}
        {currentState === 'signup' && (<p className='absolute md:bottom-10 md:left-14 bottom-5 left-5 text-sm text-gray-500' >Already have an account? <span className='text-[#686df8] cursor-pointer ' onClick={() => setCurrentState('login')}>Login</span></p>)}
      </div>
    </div>
  )
}

export default PartnerLogin