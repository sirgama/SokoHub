import React from 'react'
import { Link } from 'react-router-dom'
import './HeroLanding.css'
import dreamer from '../../../assets/dreamer.svg'
import envd from '../../../assets/envd.svg'
import investor from '../../../assets/invest.svg'

export default function HeroLanding() {
  return (
    <section class="bg-white border-b py-8 mt-10">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Solutions
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Lease land not in use
            </h3>
            <p class="text-gray-600 mb-8">
              We provide a platform for people with unused land to lease them out to people willing to plant food and contribute towards sustainable food production.
              <br />
              <br />

              Get started as : 

              <Link to='/auth/signup'><a class="text-pink-500 underline ml-2" href="#">Land Leaser</a></Link>
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
           <img src={dreamer} alt="" />
          </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
          <img src={envd} alt="" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Smart Farming Technologies
              </h3>
              <p class="text-gray-600 mb-8">
                Providing farmers with smart farming technologies such as soil type and crops health check to enable farmers know what crops are suitable in that area and easily spot crop diseases early.
                <br />
                <br />
                Get started as :

                <Link to='/auth/signup'><a class="text-pink-500 underline ml-2" href="#">Farmer</a></Link>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Connecting Investors to Farmers and Leasers
            </h3>
            <p class="text-gray-600 mb-8">
              Making it easy for investors to connect with Farmers and Leasers and turn their investments to profit while taking part in sustainable food production.
              <br />
              <br />

              Get started as : 

              <Link to='/auth/signup'><a class="text-pink-500 underline ml-2" href="#">Investor</a></Link>
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
           <img src={investor} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
