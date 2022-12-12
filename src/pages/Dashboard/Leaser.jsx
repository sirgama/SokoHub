import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/Authcontext';
import SidebarLeaser from './components/SidebarLeaser'
import Dashnav from './components/Dashnav';
import SidenavLeaser from './components/SidenavLeaser';

export default function Leaser() {
  const { user, logoutUser } = useContext(AuthContext);
    let navigate = useNavigate()
   
  return (
    <div className='flex flex-col-reverse md:flex-row container-lg'>

    <div className=' my-auto flex flex-col justify-center'>
      <SidenavLeaser />
    </div>
    <div className='w-full'>
      <Dashnav />
      <Outlet />
    </div>

  </div>
  )
}
