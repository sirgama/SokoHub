import React from 'react'
import Farms from './Farms'

export default function FLandlist() {
  return (
    <div>
        <div className='px-7 py-5'>
        <h1 className="text-2xl  underline-offset-8 font-semibold"> Farms</h1>
        <div className="bg-white mt-4 w-9/12 h-auto rounded-2xl ">
            <Farms />
        </div>
        </div>
    </div>
  )
}
