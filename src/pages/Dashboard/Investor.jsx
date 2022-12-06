import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/Authcontext';

export default function Investor() {
  const { user, logoutUser } = useContext(AuthContext);
    let navigate = useNavigate()
   
  return (
    <div>
      
      <h1>{user.role}</h1>
      <button onClick={logoutUser} className='bg-blue-400 px-8 py-2'>Log out</button>

    </div>
  )
}
