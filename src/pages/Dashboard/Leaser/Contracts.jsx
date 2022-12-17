import React, { useState } from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';
import LandModal from './LandModal';
import Nav from './Nav';

export default function Contracts() {
    const { user, logoutUser } = useContext(AuthContext);
    const [modal, setModal] = useState(false)

    const handleModal = () => setModal(true)

  return (
    <div>
        <Nav />
        <div className="flex flex-row justify-between py-4">
        <h1 className="text-center font-semibold   underline-offset-8 mx-20 text-2xl">My Contracts</h1>
        <div className="px-7 py-2  text-gray-200 font-semibold cursor-pointer hover:bg-emerald-700 rounded-xl" onClick={handleModal}></div>
        {modal && <LandModal setModal={setModal} />}
        </div>
        <div className='w-auto h-auto p-5 flex flex-col justify-center items-center'>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Contract with
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Start date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            End date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Renewable?
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Reference number
                        </th>
                        <th scope="col" class="py-3 px-6">
                             
                        </th>
                        <th scope="col" class="py-3 px-6">
                             
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="p-4 w-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Victor George
                        </th>
                        <td class="py-4 px-6">
                            11/01/2022
                        </td>
                        <td class="py-4 px-6">
                            2/12/2024
                        </td>
                        <td class="py-4 px-6">
                            Active
                        </td>
                        <td class="py-4 px-6">
                            Yes
                        </td>
                        <td class="py-4 px-6">
                            45000
                        </td>
                        <td class="py-4 px-6">
                            
                        </td>
                        <td class="flex items-center py-4 px-6 space-x-3">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                       
                    </tr>
                  
                   
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}
