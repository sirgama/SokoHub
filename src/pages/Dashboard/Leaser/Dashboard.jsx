import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';
import Nav from './Nav';
import {FcBullish, FcLineChart, FcAbout, FcCloseUpMode, FcLandscape, FcCloth, FcViewDetails, FcDataSheet, FcGlobe, FcBarChart} from 'react-icons/fc'
import Farmstable from '../Farmer/Farmstable';
import Cropslist from '../Farmer/Cropslist';
import {MdAssignment} from 'react-icons/md'
import Landstable from './Landstable';
import Contractslist from './ContractsList';

export default function Dashboard() {
    const { user, logoutUser } = useContext(AuthContext);

    const [lands, setLands] = useState([])
    const headers = {
        'Authorization': `Bearer ${user.jti}`,
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }

    const getLands = () => {
        axios.get(`http://sokohub.up.railway.app/lessor/land/`,   headers   ).then((res) => {
                    setLands(res.data);
         
        });
      };
    
      useEffect(() => {
        getLands();
      }, []);

      console.log(lands)

  return (
    <div className='px-7 py-5'>
        <h1 className="text-2xl  underline-offset-8 font-semibold">{user.role} Dashboard</h1>
        <div className="bg-white mt-4 w-full h-48 rounded-2xl ">
            <h1 className="font-semibold py-2 pl-14 ">Overview</h1>
            <div className="flex flex-row justify-between">
            <div className="w-3/12 h-32 bg-[#fac887c7] shadow m-auto rounded flex flex-row justify-around items-center">
                        <div>
                        <FcCloth className='text-4xl my-3' />
                        <h1 className="text-black text-sm">My Lands<FcAbout className='inline-block ml-1' /></h1>
                        <h1 className='text-4xl my-2 font-bold'>4</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center align-middle'>
                            <FcGlobe className='text-6xl' />
                        </div>
                    </div>
                    <div className="w-3/12 h-32 bg-[#6daeccad] shadow m-auto rounded flex flex-row justify-around items-center">
                        <div>
                        <FcDataSheet className='text-4xl my-3' />
                        <h1 className="text-black text-sm"> My Contracts<FcAbout className='inline-block ml-1' /></h1>
                        <h1 className='text-4xl my-2 font-bold'>3</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center align-middle'>
                            <FcViewDetails className='text-6xl' />
                        </div>
                    </div>
                    <div className="w-3/12 h-32 bg-[#a695fcc5] shadow m-auto rounded flex flex-row justify-around items-center">
                        <div>
                        <FcBullish className='text-4xl my-3' />
                        <h1 className="text-black text-sm">Total leasing Income<FcAbout className='inline-block ml-1' /></h1>
                        <h1 className='text-4xl my-2 font-bold'>159k</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center align-middle'>
                            <FcBarChart className='text-6xl' />
                        </div>
                    </div>
            </div>
        </div>
        <div className="w-full rounded-3xl mt-4 flex flex-row justify-around">
            <div className="w-6/12 bg-white flex justify-center rounded-3xl">
                <Landstable />
            </div>
            <div className="w-5/12 bg-white flex justify-center rounded-3xl">
                <Contractslist />
            </div>
        </div>
    </div>
  )
}
