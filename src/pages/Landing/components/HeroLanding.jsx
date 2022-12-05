import React from 'react'
import { Link } from 'react-router-dom'
import './HeroLanding.css'

export default function HeroLanding() {
  return (
    <div className='hero flex flex-col justify-center align-middle items-center'>
        <div id="overlay"></div>
      <h3 className='text-green-50 font-extrabold md:text-7xl text-center p-6'>Bringing Technology to <br /> Sustainable Food Production</h3>
      <div className="flex">
           <div className="bg-green-900 text-white font-semibold cursor-pointer md:px-10 py-3 rounded-2xl mx-2 ">Learn more</div> 
           <Link to='/auth/signup'> <div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-10 py-3 rounded-2xl mx-4">Get started</div></Link> 
      </div>
    </div>
  )
}
