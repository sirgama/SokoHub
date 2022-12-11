import React from 'react'
import Crops from './Crops'

export default function Croplist() {
  return (
    <div>
        <div className='px-7 py-5'>
        <h1 className="text-2xl  underline-offset-8 font-semibold"> Crops</h1>
        <div className="bg-white mt-4 w-11/12 h-auto rounded-2xl ">
           <Crops />
        </div>
        </div>
    </div>
  )
}
