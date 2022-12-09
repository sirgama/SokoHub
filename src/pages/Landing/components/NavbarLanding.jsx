import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLanding() {
  return (
    <div>
      
<nav className="bg-inherit border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-[#eee5d7]">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="#" className="flex items-center">
      <img src="https://www.svgrepo.com/show/214935/plant.svg" className="h-6 mr-1 sm:h-10" alt="SokoHub Logo" />
      <span className="self-center text-2xl font-medium font-sans whitespace-nowrap dark:text-green-800">SokoHub</span>
  </a>
  <div className="flex md:order-2">
     <Link to='/signup'> <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-800">Get started</button></Link>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#eee5d7] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#eee5d7] dark:bg-[#eee5d7] md:dark:bg-[#eee5d7] dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 font-bold text-green-800 bg-blue-700 rounded md:bg-transparent md:text-green-900 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 font-bold text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-900 dark:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-900 dark:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-900 dark:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}
