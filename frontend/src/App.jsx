import React from 'react'
import Navbar from './components/Navbar'
import { useScroll  } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hiring from './pages/Hiring'
import AppliedJobs from './pages/AppliedJobs'
import Applications from './pages/Applications'
import Profile from './pages/Profile'
import Lenis from 'lenis'
import { useEffect ,useContext } from 'react'
import Footer from './components/Footer'
import Login from './pages/Login'
import PartnerLogin from './pages/PartnerLogin'
import { ToastContainer } from 'react-toastify'
import JobComponent from './components/JobComponent'
import { AppContext } from './context/AppContext'
import UserData from './pages/UserData'
import Newsletter from './pages/Newsletter'
const App = () => {
  const {loginStatus , userType} = useContext(AppContext)
  const { scrollY } = useScroll()

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className='overflow-x-hidden min-w-[100vw] '>
      {loginStatus && <Navbar scrollY={scrollY} />}
      <ToastContainer/>
      <Routes>
        {loginStatus ?<Route path="/" element={<Home />} />:<Route path="/" element={<Login />} />}
        <Route path='/login' element={<Login/>}/>
        <Route path="/partner-login" element={<PartnerLogin />} />
        {<Route path="/hiring" element={<Hiring />} />}
        {<Route path="/applied" element={<AppliedJobs />} />}
        {<Route path='/newsletter' element={<Newsletter/>}/>}
        {<Route path="/applications" element={<Applications />} />}
        <Route path="/profile" element={<Profile />} />
        <Route path="/job/:id" element={<JobComponent/>}/>
        <Route path='/user-data/:id' element={<UserData/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App