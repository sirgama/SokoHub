import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/Authcontext';
import SidebarLeaser from './components/SidebarLeaser'

export default function Leaser() {
  const { user, logoutUser } = useContext(AuthContext);
    let navigate = useNavigate()
   
  return (
    <div className='flex flex-col-reverse md:flex-row'>

      <div className='h-screen my-auto flex flex-col justify-center'>
        <SidebarLeaser />
      </div>
      <div>
      <Outlet />
      </div>

    </div>
  )
}
