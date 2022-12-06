import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';

export default function MyLands() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div>My</div>
  )
}
