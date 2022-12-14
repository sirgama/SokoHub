import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/Authcontext';
import {MdWavingHand} from 'react-icons/md'
import {IoCogOutline, IoChatboxEllipsesOutline, IoGift} from 'react-icons/io5'

export default function Dashnav() {

    const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className='shadow rounded-lg px-0'>
        <nav x-data="{ isOpen: false }" class="relative bg-white dark:bg-[#fefefe]">
    <div class="container px-6 py-4 mx-auto" >
        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex items-center justify-between">
                <div class="text-xl font-semibold text-gray-700">
                    <a class="text-2xl font-normal text-gray-800 transition-colors duration-300 transform dark:text-gray-800 font-sans lg:text-xl hover:text-gray-700 dark:hover:text-gray-900" href='#' >  Hello, {user.first_name} {user.last_name} </a>
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
               
                <div class="flex items-center mt-4 lg:mt-0">
                    <button class="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                    
                    <IoGift className='text-gray-800 w-6 h-6 mx-2 ' />
                    <IoCogOutline className='text-gray-800 w-6 h-6 mx-2 ' />
                    <IoChatboxEllipsesOutline className='text-gray-800 w-6 h-6 mx-2 mr-4 ' />
                        <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src="https://e7.pngegg.com/pngimages/371/667/png-clipart-computer-icons-user-profile-encapsulated-postscript-icon-black-rectangle-black-thumbnail.png" class="object-cover w-full h-full" alt="avatar" />
                        </div>


                        <h3 class="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{user.first_name} {user.last_name}</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</nav>
    </div>
  )
}
