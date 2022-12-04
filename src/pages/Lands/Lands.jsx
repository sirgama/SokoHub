import React from 'react'
import NavbarLanding from '../Landing/components/NavbarLanding'
import Cards from './components/Cards'

export default function Lands() {
  return (
    <div>
      <NavbarLanding />

      <h1 className="text-center font-sans md:text-4xl md:mt-16 underline underline-offset-8 text-pink-700">SokoLand</h1>
      <div className="flex flex-row justify-center md:mt-8">
        <h2 className="text-center">Recently added</h2>
      </div>
      <div className='mx-auto max-w-screen-2xl py-2 md:py-0 px-2 lg:px-2 lg:py-0 rounded-3xl mt-6 md:mt-14'>
      <div className="flex flex-col md:flex-row w-full flex-wrap justify-around">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      </div>
    </div>
  )
}
