
import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({children}) =>{

    const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  )

  const [user, setUser] = useState(() =>
  localStorage.getItem("authTokens")
    ? jwt_decode(localStorage.getItem("authTokens"))
    : null
)

const [loading, setLoading] = useState(true);


 const loginUser = async (username, password) => {
    const response = await fetch("https://sokohub.up.railway.app/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      
    } else {
      alert("Something went wrong!");
    }
  };

  const registerUser = async (email, first_name,last_name, password1, password2, role) => {
    const response = await fetch("https://sokohub.up.railway.app/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        first_name,
        last_name,
        password1,
        password2,
        role
      })
    });
    if (response.status === 201) {
        <Navigate to="/auth/login" />
    } else {
      console.error("Something went wrong!");
    }
  };


//    const registerUser = async (email, first_name,last_name, password1, password2, role) => {
//     await axios({
//         method: 'POST',
//         url: 'http://127.0.0.1:8000/auth/signup/',
//         headers: {
//             "Content-Type": "application/json"
//           },
//         data: {
//             email,
//             first_name,
//             last_name,
//             password1,
//             password2,
//             role
//         }
//       }).then(function (response) {
//         console.log(response);
//         <Navigate to="/auth/login" />

//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     const response =  fetch("http://127.0.0.1:8000/auth/signup/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: {
//         email,
//         first_name,
//         last_name,
//         password1,
//         password2,
//         role
//       }
//     });
//     if (response.status === 201) {
     
//     } else {
//       alert("Something went wrong!");
//     }
//   };


  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
   
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  };
  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );

}
export function UserAuth(){
    return useContext(AuthContext)
}
