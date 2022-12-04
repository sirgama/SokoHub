import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className='bg-[#d6cab5] mx-auto  py-2 md:py-0 px-2 lg:px-2 lg:py-0 md:mt-28 '>
      <div className="mx-auto max-w-screen-2xl md:mb-28">
        <p className="text-green-800/75 px-2 md:px-20 font-bold pt-8">- Our solutions</p>
        <h1 className="text-green-800 text-3xl md:text-5xl font-bold px-2 md:px-20 md:py-8 py-4 md:leading-tight">SOLUTIONS WE OFFER</h1>

        <div className="flex flex-col md:flex-row w-full flex-wrap justify-center md:mb-28">
            <div className=" bg-[#715439] rounded-3xl md:w-[30%] py-6 px-6 md:px-8 m-2 text-white hover:bg-green-900  transition ease-in-out duration-150 ">
                <h1 className="text-5xl font-bold p-4">01</h1>
                <h3 className=" text-xl my-2 font-semibold">Farmers Dashboard</h3>
                <p className="text-gray-300 font-normal text-sm">An interactive dashboard for farmers to interact with their farm and find resources related tofarming and agriculture.</p>
                <Link to=''><div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-8 py-3 my-6 rounded-2xl mx-auto text-center">Learn More</div> </Link>
            </div>
            <div className=" bg-green-900 rounded-3xl md:w-[30%] py-6 px-6 md:px-8 m-2 text-white hover:bg-[#715439]  transition ease-in-out duration-150 ">
                <h1 className="text-5xl font-bold p-4">02</h1>
                <h3 className=" text-xl my-2 font-semibold">Investor dashboard</h3>
                <p className="text-gray-300 font-normal text-sm">Dashboard for investors to view the status of their investment.</p>
                <Link to=''><div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-8 py-3 my-9 rounded-2xl mx-auto text-center">Learn More</div> </Link>
            </div>
            <div className=" bg-[#715439] rounded-3xl md:w-[30%] py-6 px-6 md:px-8 m-2 text-white hover:bg-green-900  transition ease-in-out duration-150 ">
                <h1 className="text-5xl font-bold p-4">03</h1>
                <h3 className=" text-xl my-2 font-semibold">SokoLands</h3>
                <p className="text-gray-300 font-normal text-sm">A collection of land available for rent for a period of farming time. This also includes cost of the land and location</p>
                <Link to='/lands'><div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-8 py-3 my-6 rounded-2xl mx-auto text-center">View available land</div> </Link>
            </div>
            <div className=" bg-green-900 rounded-3xl md:w-[30%] py-6 px-6 md:px-8 m-2 text-white hover:bg-[#715439]  transition ease-in-out duration-150 ">
                <h1 className="text-5xl font-bold p-4">04</h1>
                <h3 className=" text-xl my-2 font-semibold">Leaser Portal</h3>
                <p className="text-gray-300 font-normal text-sm">A portal for land owners who want to rent out their land for farming.</p>
                <Link to=''><div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-8 py-3 my-6 rounded-2xl mx-auto text-center">Get Started</div> </Link>
            </div>
            <div className=" bg-[#715439] rounded-3xl md:w-[30%] py-6 px-6 md:px-8 m-2 text-white hover:bg-green-900  transition ease-in-out duration-150 ">
                <h1 className="text-5xl font-bold p-4">05</h1>
                <h3 className=" text-xl my-2 font-semibold">Urban Modern Farming</h3>
                <p className="text-gray-300 font-normal text-sm">Affordable methods for farming for urban dwellers.</p>
                <Link to=''><div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-8 py-3 my-10 rounded-2xl mx-auto text-center">View options</div> </Link>
            </div>
            <div className=" bg-green-900 rounded-3xl md:w-[30%] py-6 px-6 md:px-8 m-2 text-white hover:bg-[#715439]  transition ease-in-out duration-150 ">
                <h1 className="text-5xl font-bold p-4">06</h1>
                <h3 className=" text-xl my-2 font-semibold">SokoChanga</h3>
                <p className="text-gray-300 font-normal text-sm">A pay as you go system fr farmers to afford smart technologies to improve their farming.</p>
                <Link to=''><div className="bg-green-50 text-gray-700 font-semibold cursor-pointer md:px-8 py-3 my-6 rounded-2xl mx-auto text-center">Learn More</div> </Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}
