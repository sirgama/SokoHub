import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
      <div class="bg-white font-family-karla h-screen">

<div class="w-full flex flex-wrap">

    <div class="w-full md:w-1/2 flex flex-col">

        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
        <a href="#" className="flex items-center">
      <img src="https://www.svgrepo.com/show/214935/plant.svg" className="h-6 mr-1 sm:h-10" alt="SokoHub Logo" />
      <span className="self-center text-2xl font-medium font-sans whitespace-nowrap dark:text-green-800">SokoHub</span>
  </a>
        </div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-3xl">Join Us.</p>
            <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                <div class="flex flex-col pt-4">
                    <label for="name1" class="text-sm">First Name</label>
                    <input type="text" id="name1" placeholder="Gamaliel" class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div class="flex flex-col pt-4">
                    <label for="name2" class="text-sm">Last Name</label>
                    <input type="text" id="name2" placeholder=" Sirengo" class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-sm">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-sm">Password</label>
                    <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="confirm-password" class="text-sm">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div className="flex flex-col pt-4">
                <label for="role" class="text-sm">Register as:</label>
                <select class="border rounded w-full py-1 px-3 text-gray-700 mt-1 leading-tight " name="role" id="role">
                    <option value="farmer">Farmer</option>
                    <option value="investor">Investor</option>
                    <option value="leaser">Leaser</option>
                    <option value="admin">Admin</option>
                </select>
                </div>

                <input type="submit" value="Register" class="bg-green-800 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
            <div class="text-center pt-12 pb-12">
                <p>Already have an account? <Link to="/auth/login" class="underline font-semibold">Login here.</Link></p>
            </div>
        </div>

    </div>

    <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-screen hidden md:block" src="https://www.delreport.com/wp-content/uploads/2018/10/cocoa-magnum-fjona-hill-2_Fotor.jpg" alt="Background" />
    </div>
</div>

</div>
    </div>
  )
}
