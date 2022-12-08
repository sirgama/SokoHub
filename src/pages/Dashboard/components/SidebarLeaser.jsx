import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/Authcontext';

export default function SidebarLeaser() {

    const { user, logoutUser } = useContext(AuthContext);
    console.log(user)


  return (
    <div className='md:w-64 h-screen bg-[#eek5d7] shadow-2xl rounded-lg sticky'>
        <a href="#" class="flex items-center pl-2.5  mt-10">
         <img src="https://www.svgrepo.com/show/214935/plant.svg" class="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
         <span class="self-center text-2xl font-medium font-sans whitespace-nowrap dark:text-green-800">SokoHub</span>
      </a>
        
<aside className="md:w-64 " aria-label="Sidebar">
   <div className="overflow-y-auto h-screen py-4 px-3 bg-[#eeg5d7] rounded dark:bg-[#eek5d7] flex flex-col my-auto justify-around">
   
      <ul className="space-y-2">
         <li>
            <Link to="home" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-green-800 hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link to="contracts" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-green-800 hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">My Contracts</span>
            </Link>
         </li>
         <li>
            <Link to="lands" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-green-800 hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">My Lands</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </Link>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-green-800 hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
         </li>
        
         <li>
            <a href="#" onClick={logoutUser} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-green-800 hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </a>
         </li>
        
      </ul>
      <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-emerald-900" role="alert">
         <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">SokoHub Beta</span>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-emerald-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
         </div>
         <p className="mb-3 text-sm text-white dark:text-white">
            SokoHub is still in Beta mode.You may experience a few issues while navigating around. We are working on improving it.
         </p>
      </div>
   </div>
</aside>

    </div>
  )
}
