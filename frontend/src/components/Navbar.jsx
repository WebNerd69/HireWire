import { useState, useRef, useContext } from "react"
import { motion, useMotionValueEvent } from "framer-motion"
import { NavLink } from "react-router-dom"
import profileIcon from "../assets/user-3-fill.svg"
import { AppContext } from "../context/AppContext"
const Navbar = ({ scrollY }) => {
  const {userType} = useContext(AppContext)
  const [isHidden, setIsHidden] = useState(false)
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current
    if (Math.abs(diff) > 50) {
      setIsHidden(diff > 50)
      lastYRef.current = y
    }

  })
  const [profileMenuIsOpen,setProfileMenuIsOpen] = useState(false)
  const toggleProfileMenu=()=>{
    if (profileMenuIsOpen ) {
      setProfileMenuIsOpen(false)
    } else {
      setProfileMenuIsOpen(true)
    }
  }
  return (
    <motion.div
      initial="visible"
      whileHover="visible"
      transition={{ duration: .3, type: "spring" }}
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        hidden: {
          y: "-60%",
          scale: "80%",
        },
        visible: {
          y: "20%",
          scale: "100%",
        }
      }}
      className='w-full flex justify-center fixed cursor-pointer z-10 pb-6'>
      <nav className='md:px-3 px-3 py-2 bg-[#fff] rounded-full sm:w-[80%] md:min-w-[600px] min-w-[300px] md:w-[30%] w-[95%] text-slate-900 md:font-medium flex justify-between tracking-wide md:text-[16px] text-[10px] poppins-semi-bold items-center shadow-lg whitespace-nowrap relative'>
        <NavLink to='/'
          className={({ isActive }) => (isActive ? "sm:px-7 sm:py-1 px-5 py-1 rounded-full bg-[#686df8] transition-all duration-300 ease-in-out text-white sarina-regular text-xl md:text-2xl" : "sm:px-7 sm:py-1 px-5 py-1 rounded-full transition-all duration-300 ease-in-out sarina-regular text-xl md:text-2xl")} onClick={()=>setProfileMenuIsOpen(false)}>
          h
        </NavLink>
        <NavLink to='/hiring'
          className={({ isActive }) => (isActive ? "sm:px-7 sm:py-2 px-5 py-2 rounded-full bg-[#686df8] transition-all duration-300 ease-in-out text-white" : "sm:px-7 sm:py-2 px-5 py-2 rounded-full transition-all duration-300 ease-in-out")} onClick={()=>setProfileMenuIsOpen(false)}>
          Hiring
        </NavLink>
        {userType==="user"&&<NavLink to='/applied'
          className={({ isActive }) => (isActive ? "sm:px-7 sm:py-2 px-5 py-2 rounded-full bg-[#686df8] transition-all duration-300 ease-in-out text-white" : "sm:px-7 sm:py-2 px-5 py-2 rounded-full transition-all duration-300 ease-in-out")} onClick={()=>setProfileMenuIsOpen(false)}>
          Applied Jobs
        </NavLink>}
        {userType==="partner"&&<NavLink to='/applications'
          className={({ isActive }) => (isActive ? "sm:px-7 sm:py-2 px-5 py-2 rounded-full bg-[#686df8] transition-all duration-300 ease-in-out text-white" : "sm:px-7 sm:py-2 px-5 py-2 rounded-full transition-all duration-300 ease-in-out")} onClick={()=>setProfileMenuIsOpen(false)}>
          Applications
        </NavLink>}
        <NavLink to='/newsletter'
          className={({ isActive }) => (isActive ? "sm:px-7 sm:py-2 px-5 py-2 rounded-full bg-[#686df8] transition-all duration-300 ease-in-out text-white" : "sm:px-7 sm:py-2 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ")} onClick={()=>setProfileMenuIsOpen(false)}>
          Newsletter
        </NavLink>
        <NavLink to="/profile"
          className= "sm:px-3 sm:py-3 px-3 py-3 rounded-full transition-all duration-300 ease-in-out bg-[#686df8]"
          >
          <img src={profileIcon} alt="profile" className="md:w-5 w-3 md:h-5 h-3" />
        </NavLink>
      
      </nav>
    </motion.div>
  )
}

export default Navbar