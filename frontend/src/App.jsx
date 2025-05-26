import React from 'react'
import Navbar from './components/Navbar'
import { useScroll } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hiring from './pages/Hiring'
import AppliedJobs from './pages/AppliedJobs'
import Applications from './pages/Applications'
import Profile from './pages/Profile'
const App = () => {

  const {scrollY }= useScroll()
  return (
    <div className='overflow-x-hidden min-w-[100vw] min-h-[200vh] pt-1'>
      <Navbar scrollY={scrollY}/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hiring" element={<Hiring/>}/>
          <Route path="/applied" element={<AppliedJobs/>}/>
          <Route path="/applications" element={<Applications/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default App