import React, { useState } from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';
import LandCard from './LandCard';
import LandModal from './LandModal';
import Nav from './Nav';

export default function MyLands() {
  const { user, logoutUser } = useContext(AuthContext);
  const [modal, setModal] = useState(false)

  const handleModal = () => setModal(true)

  return (
    <div>
      <Nav />
      <div className="flex flex-row justify-between py-4">
        <h1 className="text-center font-semibold   underline-offset-8 mx-20 text-2xl">My Lands</h1>
        <div className="px-7 py-2 mr-20 bg-green-800 text-gray-200 font-semibold cursor-pointer hover:bg-emerald-700 rounded-xl" onClick={handleModal}>New Land</div>
        {modal && <LandModal setModal={setModal} />}
        </div>
      <div className="flex flex-row flex-wrap m-4 mx-8 ">
        <LandCard />
      </div>
    </div>
  )
}
