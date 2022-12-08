import React from 'react'
import { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom'
import AuthContext from '../../context/Authcontext'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate()
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setError] = useState("");
    

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        try {
          await loginUser(email, password);
          setTimeout(routeUser, 50)
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        
      };
    const routeUser = () => {
      if(user.role === 'LEASER'){
        navigate('/dashboard/leaser/home')
      } else if(user.role === 'INVESTOR'){
        navigate('/dashboard/investor/home')
      }else{
        navigate('/dashboard/farmers/home')
      }
    }

    console.log(password)
  return (
    <div>
      <div className="bg-white font-family-karla h-screen">

<div className="w-full flex flex-wrap">

    <div className="w-full md:w-1/2 flex flex-col">

        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <a href="#" className="flex items-center">
      <img src="https://www.svgrepo.com/show/214935/plant.svg" className="h-6 mr-1 sm:h-10" alt="SokoHub Logo" />
      <span className="self-center text-2xl font-medium font-sans whitespace-nowrap dark:text-green-800">SokoHub {password}</span>
  </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-4">
                    <label htmlFor="email" className="text-lg">Email</label>
                    <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div className="flex flex-col pt-4">
                    <label htmlFor="password" className="text-lg">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <input type="submit" value="Log In" className="bg-green-800 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
            <div className="text-center pt-12 pb-12">
                <p>Don't have an account? <Link to="/auth/signup" className="underline font-semibold">Register here.</Link></p>
            </div>
        </div>

    </div>

    <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    </div>
</div>

</div>
    </div>
  )
}
