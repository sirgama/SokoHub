import React from 'react'
import { Link } from 'react-router-dom'
import './HeroLanding.css'

export default function CTA() {
  return (
    <div className=''>
      <section className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
  <div className="max-w-screen-xl mx-auto p-8">
    <div className="lg:text-center">
      <h2 className="font-heading mb-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg md:w-36 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">FAQs</h2>

      <h3 className="text-3xl font-extrabold leading-9  text-gray-900 mb-12">
        Frequently Asked Questions
      </h3>
    </div>
    <div className="flex items-start flex-wrap mx-auto">
        <div className="p-4 md:w-1/2 w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
                What is a home energy rating?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    A home energy rating is an estimated calculation into a homes potential energy usage, which will determine the amount of heating and cooling required to make its occupants comfortable. It produces a star rating dependant on the amount of heating and cooling loads which will be required, from 0 to 10 stars.
                </p>
            </p>
          </div>
        <div className="p-4 md:w-1/2 w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
                Why do I need a 6 Star energy rating?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars.
                </p>
            </p>
          </div>
        <div className="p-4 md:w-1/2 w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
                What is the general cost of an energy rating?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    Simple energy rating prices vary greatly on the size and type of building, generally an energy rating will cost somewhere between $130 to $700+.
                </p>
            </p>
          </div>
        <div className="p-4 md:w-1/2 w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
                What information do I need to supply for an energy rating to be completed??
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    The information required to complete a full and comprehensive energy report are the following final working drawings: Site Plan, Floor Plan, Elevations, Sections, Lighting layout and window schedule (including sizes of the existing windows).
                </p>
            </p>
        </div>

    </div>
</div>


</section>

<section>
<div className="bg-gray-100">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Join us in contributing towards</span>
      <span className="block text-secondary-600">Food Security, Job Creation and Smart Farming Technologies. </span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <Link to='/auth/signup'><a href="#"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-emerald-700" >
          Sign up
        </a></Link>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
      <Link to='/auth/login'><a href="#"
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary-600 bg-white hover:bg-primary-50">
          Login
        </a></Link>
      </div>
    </div>
  </div>
</div>
</section>
    </div>
  )
}
