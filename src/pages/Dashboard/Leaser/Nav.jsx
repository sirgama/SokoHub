import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../../../context/Authcontext';
import '../../../pages/Landing/components/Nav.css'

export default function Nav() {
    const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="p-2 mb-2">
      <div className='hero h-28 flex flex-col justify-between  mx-auto rounded-2xl shadow-2xl'>
        <div className='flex flex-row justify-between'>
            <h3 className='w-full text-pink-200 md:text-2xl  text-start p-4 '>  <span className=" text-pink-100 font-normal underline underline-offset-8 font-sans text-2xl mb-1">Lands Dashboard</span> <br />Hello, {user.first_name} {user.last_name}   </h3>
            <h3 className='w-full text-pink-50  md:text-xl text-start p-6 '>Upload and manage your <br /> Land and Contracts from one place. </h3>
        </div>
     
    
    </div>  
    </div>
    
  )
}
