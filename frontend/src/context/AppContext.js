import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
export const AppContext = createContext();

const AppContextProvider = (props) =>{
     // state variables
     const [userType,setUserType] = useState(null)
     const [token,setToken] = useState(null)
     const [resume,setResume] = useState(null)
     const [userData,setUserData] = useState({
          username:null,
          email:null,
          phone:null,
          address:null,
          companyName:null,
          country:null,
          state:null,
          district:null
     })
     const [loginStatus,setLoginStatus] = useState(false)

     // useEffect
     useEffect(()=>{
          
          try {
               const token = localStorage.getItem("token")
               console.log(token)
          } catch (error) {
               console.log(error)
          }
     },[])

     // functions



     // context values
     const value={
          userType,setUserType,
          userData,setUserData,
          resume,setResume,
          token,setToken,
          loginStatus,setLoginStatus,
          
          
     }
     return (
          <AppContext.Provider value={value} >
               {props.children}
          </AppContext.Provider>
     )
}

export default AppContextProvider