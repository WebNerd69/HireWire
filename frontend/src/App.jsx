import React from 'react'
import Navbar from './components/Navbar'
import { useScroll } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hiring from './pages/Hiring'
import AppliedJobs from './pages/AppliedJobs'
import Applications from './pages/Applications'
import Profile from './pages/Profile'
import Lenis from 'lenis'
import { useEffect } from 'react'
import Footer from './components/Footer'
import Login from './pages/Login'
const App = () => {

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
      <Navbar scrollY={scrollY} />
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/applied" element={<AppliedJobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App