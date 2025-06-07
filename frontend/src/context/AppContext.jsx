import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
     const navigate = useNavigate();
     const backendURL = "https://hirewire-backend.onrender.com"
     // state variables
     const [userType, setUserType] = useState(null)
     const [token, setToken] = useState(null)
     const [resume, setResume] = useState(null)
     const [jobs, setJobs] = useState([])
     const [loginStatus, setLoginStatus] = useState(false)
     const [searchBy , setSearchBy] = useState("location")
     const [searchValue , setSearchValue] = useState("")

     const [userData, setUserData] = useState({
          _id: null,
          username: null,
          email: null,
          phone: null,
          address: null,
          companyName: null,
          country: null,
          state: null,
          district: null
     })
     // functions
     const fetchUserData = async (id) => {
          try {
               const response = await axios.get(`${backendURL}/api/user/get-user/${id}`)
               if (response.data.success) {
                    setUserData(response.data.user)
               } else {
                    toast.error("failed to load user data")
               }
          } catch (error) {
               console.log(error)
          }
     }
     const fetchPartnerData = async(partnerId)=>{
          try {
               const response = await axios.get(`${backendURL}/api/partner/get-partner/${partnerId}`)
               if (response.data.success) {
                    setUserData(response.data.partner)
                    // console.log(response.data.partner)
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error)
          }
     }
     const fetchJobs = async () => {
          try {
               const response = await axios.get(`${backendURL}/api/job/all`);
               //     console.log("API Response:", response.data); // 🔍 Log full response

               if (response.data.success) {
                    //  console.log("Jobs received:", response.data.jobs); // 🔍 Check job array
                    setJobs(response.data.jobs);
               } else {
                    console.error("API responded with an error:", response.data.message);
               }
          } catch (error) {
               console.error("Request failed:", error);
          }
     }
     


     // useEffect
     // 1️⃣ Load token and user from localStorage on mount
     useEffect(() => {
          const token = localStorage.getItem("token");
          const user = localStorage.getItem("userId");
          const type = localStorage.getItem("userType")
          setUserType(type)
          if (token) {
               setLoginStatus(true);
               setToken(token);
               if (type === "user") {
                    fetchUserData(user)
               } else {
                    fetchPartnerData(user)
               }

          } else {
               setLoginStatus(false);
          }
     }, []);

     useEffect(() => {
          fetchJobs()
     }, []);

     // context values
     const value = {
          userType, setUserType,
          userData, setUserData,
          resume, setResume,
          token, setToken,
          loginStatus, setLoginStatus,
          navigate,
          backendURL,
          jobs,fetchJobs,
          searchBy, setSearchBy,
          searchValue, setSearchValue
     }
     return (
          <AppContext.Provider value={value} >
               {props.children}
          </AppContext.Provider>
     )
}

export default AppContextProvider
