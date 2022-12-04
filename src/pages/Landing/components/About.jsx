import React from 'react'

export default function About() {
  return (
    <div>
      <div className=' mx-auto max-w-screen-2xl py-2 md:py-4 px-2 lg:px-2 lg:py-0 rounded-3xl mt-6'>
      <p className="text-green-800/75 px-2 md:px-20 font-bold pt-8">- About us</p>
        <h1 className="text-[#715439] text-3xl md:text-6xl font-extrabold px-2 md:px-20 md:py-8 py-4 md:leading-tight "><span className="text-green-900">SOKOHUB</span> IS ON A JOURNEY TOWARDS PROVIDING TECHNOLOGY TO SUSTAINABLE FOOD PRODUCTION AND BRIDGING THE GAP BETWEEN INVESTORS AND FARMERS. </h1>
        <p className="text-[#715439] px-2 md:px-20 text-3xl underline underline-offset-8 font-bold  text-center md:mt-16 md:mb-10">Mission</p>
        <div className="flex flex-row justify-around px-2 md:px-20 md:py-8 py-4 md:leading-tight text-white text-center">
            <div>
                <h1 className='text-3xl text-green-800 md:text-5xl font-bold my-2'>10000+ </h1>
                <h3 className='text-gray-900 text-sm'>Farmers educated and trained on sustainable agriculture by 2030</h3>
            </div>
            <div>
                <h1 className='text-3xl text-green-800 md:text-5xl font-bold my-2'>30% </h1>
                <h3 className='text-gray-900 text-sm'>Reduction in wasted or idle land by 2030</h3>
            </div>
            <div>
                <h1 className='text-3xl text-green-800 md:text-5xl font-bold my-2'>5000+ </h1>
                <h3 className='text-gray-900 text-sm break-words'>Jobs to be created for Kenyan farmers and youths</h3>
            </div>
        </div>
        <div className='w-full h-96'>
            <img src='https://ikeafoundation.org/wp-content/uploads/2019/05/Hope-renewed-for-farmers-in-Gwanda-c-1024x681.jpg' className='relative w-full h-full object-cover object-center shadow-lg shadow-orange-900/25 rounded-3xl  my-10' alt="" />
        </div>
        
      </div>
    </div>
  )
}
