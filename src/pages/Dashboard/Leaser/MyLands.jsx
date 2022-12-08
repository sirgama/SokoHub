import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';
import LandCard from './LandCard';
import Nav from './Nav';

export default function MyLands() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <Nav />
      <h1 className="text-center font-semibold  underline underline-offset-8 mx-20 text-3xl">My Lands</h1>
      <div className="flex flex-row flex-wrap m-4 mx-8 ">
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
      </div>
    </div>
  )
}
