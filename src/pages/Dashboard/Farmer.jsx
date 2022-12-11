import React, { useContext } from 'react'
import AuthContext from '../../context/Authcontext';
import { Navigate, Outlet, redirect  } from 'react-router-dom';
import { useEffect } from 'react';
import Sidenav from './components/Sidenav';
import Dashnav from './components/Dashnav';

export default function Farmer() {
    const { user, logoutUser } = useContext(AuthContext);
     console.log(user)

  return (
    <div className='flex flex-col-reverse md:flex-row container-lg'>

      <div className=' my-auto flex flex-col justify-center'>
        <Sidenav />
      </div>
      <div className='w-full'>
        <Dashnav />
        <Outlet />
      </div>

    </div>
  )
}
