import React, { useContext } from 'react'
import AuthContext from '../../context/Authcontext';

export default function Farmer() {
    const { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
        
      <h1>Farmer {user.role}</h1>
      <button onClick={logoutUser} className='bg-blue-400 px-8 py-2'>Log out</button>
    </div>
  )
}
