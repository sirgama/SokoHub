import React, { useContext } from 'react'
import AuthContext from '../../../context/Authcontext';
import {FcBullish, FcLineChart, FcAbout, FcCloseUpMode, FcLandscape, FcCloth, FcViewDetails} from 'react-icons/fc'

export default function FDashboard() {
    const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className='px-7 py-5'>
        <h1 className="text-2xl  underline-offset-8 font-semibold">{user.role} Dashboard</h1>
        <div className="bg-white mt-4 w-full h-48 rounded-2xl ">
            <h1 className="font-semibold py-2 pl-14 ">Overview</h1>
       <div className="flex flex-row justify-between">
       <div className="w-3/12 h-32 bg-[#edf8f2] shadow m-auto rounded flex flex-row justify-around items-center">
                <div>
                <FcCloth className='text-4xl my-3' />
                <h1 className="text-black text-sm">My farms<FcAbout className='inline-block ml-1' /></h1>
                <h1 className='text-4xl my-2 font-bold'>3</h1>
                </div>
                <div className='flex flex-col items-center justify-center align-middle'>
                    <FcLandscape className='text-6xl' />
                </div>
            </div>
            <div className="w-3/12 h-32 bg-[#ecf9ff] shadow m-auto rounded flex flex-row justify-around items-center">
                <div>
                <FcCloseUpMode className='text-4xl my-3' />
                <h1 className="text-black text-sm"> My Crops<FcAbout className='inline-block ml-1' /></h1>
                <h1 className='text-4xl my-2 font-bold'>4</h1>
                </div>
                <div className='flex flex-col items-center justify-center align-middle'>
                    <FcViewDetails className='text-6xl' />
                </div>
            </div>
            <div className="w-3/12 h-32 bg-[#f2f0fe] shadow m-auto rounded flex flex-row justify-around items-center">
                <div>
                <FcBullish className='text-4xl my-3' />
                <h1 className="text-black text-sm">Projected income<FcAbout className='inline-block ml-1' /></h1>
                <h1 className='text-4xl my-2 font-bold'>128k</h1>
                </div>
                <div className='flex flex-col items-center justify-center align-middle'>
                    <FcLineChart className='text-6xl' />
                </div>
            </div>
       </div>
        </div>
    </div>
  )
}
