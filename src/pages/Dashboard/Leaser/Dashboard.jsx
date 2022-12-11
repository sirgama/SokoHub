import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import AuthContext from '../../../context/Authcontext';
import Nav from './Nav';

export default function Dashboard() {
    const { user, logoutUser } = useContext(AuthContext);

    const [lands, setLands] = useState([])
    const headers = {
        'Authorization': `Bearer ${user.jti}`,
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }

    const getLands = () => {
        axios.get(`http://127.0.0.1:8000/lessor/land/`,   headers   ).then((res) => {
                    setLands(res.data);
         
        });
      };
    
      useEffect(() => {
        getLands();
      }, []);

      console.log(lands)

  return (
    <div>
        <Nav />
        <h1 className="text-2xl  text-center py-2 mb-5  underline underline-offset-8 font-bold">Summary</h1>
        <div className="flex flex-row justify-around  mx-auto ">
          
        <div class="w-72 h-28 p-6 bg-white rounded-lg shadow-lg dark:bg-slate-400 dark:from-pink-500 dark:to-purple-400 dark:border-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
            <a href="#">
                <h5 class="mb-2 text-5xl text-center font-sans font-semibold tracking-tight text-gray-900 dark:text-white">{lands ? lands.length : 0}</h5>
            </a>
            <p class="mb-3 font-bold text-center text-gray-200 dark:text-gray-200">Your lands</p>
           
        </div>
        <div class="w-72 h-28 p-6 bg-white rounded-lg shadow-lg dark:bg-slate-400 dark:from-pink-500 dark:to-purple-400 dark:border-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
            <a href="#">
                <h5 class="mb-2 text-5xl text-center font-sans font-semibold tracking-tight text-gray-900 dark:text-white">0</h5>
            </a>
            <p class="mb-3 font-bold text-center text-gray-200 dark:text-gray-200">Contracts</p>
           
        </div>
        <div class="w-72 h-28 p-6 bg-white rounded-lg shadow-lg dark:bg-slate-400 dark:from-pink-500 dark:to-purple-400 dark:border-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
            <a href="#">
                <h5 class="mb-2 text-5xl text-center font-sans font-semibold tracking-tight text-gray-900 dark:text-white">145000</h5>
            </a>
            <p class="mb-3 font-bold text-center text-gray-200 dark:text-gray-200">Estimated Revenue in Kshs</p>
           
        </div>
        </div>

        <div className="flex flex-row justify-around  mx-auto ">
          <div className='w-2/5'>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-16">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-200">
                <thead className='text-xl font-extrabold text-gray-700 uppercase dark:text-gray-700 w-full py-5'><tr><th scope='col' className='py-3 px-6'>Recent contracts</th></tr></thead>
                    <thead class="text-xs text-gray-700 uppercase bg-slate-50 dark:bg-gray-500 dark:text-gray-200">
                        
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Contract with
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Start date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                End Date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-sky-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Victor George
                            </th>
                            <td class="py-4 px-6">
                                11/01/2022
                            </td>
                            <td class="py-4 px-6">
                                02/12/2024
                            </td>
                            <td class="py-4 px-6">
                                Active
                            </td>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-sky-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="py-4 px-6">
                                White
                            </td>
                            <td class="py-4 px-6">
                                Laptop PC
                            </td>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-sky-900 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="py-4 px-6">
                                Black
                            </td>
                            <td class="py-4 px-6">
                                Accessories
                            </td>
                            <td class="py-4 px-6">
                                $99
                            </td>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          <div className='w-2/5'>
            <div class="overflow-x-auto relative shadow-md  my-16">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-200">
                  <thead className='text-xl font-extrabold text-gray-700 uppercase dark:text-gray-700 w-full py-5'><tr><th scope='col' className='py-3 px-6'>Lands summary</th></tr></thead>
                    <thead class="text-xs text-gray-700 uppercase bg-slate-50 dark:bg-gray-500 dark:text-gray-200">
                        
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Land Location
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Lease Duration
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Approved
                            </th>
                            <th scope="col" class="py-3 px-6">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {lands.map(land => (
                            <tr class="bg-white border-b dark:bg-sky-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {land.location}
                            </th>
                            <td class="py-4 px-6">
                                {land.lease_duration}
                            </td>
                           
                            <td class="py-4 px-6">
                                {land.price}
                            </td>
                            <td class="py-4 px-6">
                                {land.approved ? 'Verified' : 'Not Verified'}
                            </td>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}
