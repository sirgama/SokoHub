import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';
import Nav from './Nav';

export default function Dashboard() {
    const { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
        <Nav />
    </div>
  )
}
