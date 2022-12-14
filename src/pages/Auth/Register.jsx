import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/Authcontext'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/Authcontext';



export default function Register() {
let navigate = useNavigate()
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [role, setRole] = useState("FARMER");
    const { registerUser } = useContext(AuthContext);
    const [errorr, setError] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        
        setError("");
        try {
          await registerUser(email, first_name, last_name, password1, password2, role);
          navigate("/auth/login");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        
      };

      
  return (
    <div>
      <div class="bg-white font-family-karla h-screen">

<div class="w-full flex flex-wrap">

    <div class="w-full md:w-1/2 flex flex-col">

        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
        <a href="#" className="flex items-center">
      <img src="https://www.svgrepo.com/show/214935/plant.svg" className="h-6 mr-1 sm:h-10" alt="SokoHub Logo" />
      <span className="self-center text-2xl font-medium  whitespace-nowrap dark:text-green-800">SokoHub</span>
  </a>
        </div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-3xl font-bold">Join Us.</p>
            <form class="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                <div class="flex flex-col pt-4">
                    <label for="name1" class="text-sm font-bold">First Name</label>
                    <input type="text" id="name1" placeholder="John" onChange={e => setFirstname(e.target.value)} class="  border-t-0 border-l-0 border-r-0 border-b-2 w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div class="flex flex-col pt-4">
                    <label for="name2" class="text-sm font-bold">Last Name</label>
                    <input type="text" id="name2" placeholder=" Doe" onChange={e => setLastname(e.target.value)} class="border-t-0 border-l-0 border-r-0 border-b-2 w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-sm font-bold">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" onChange={e => setEmail(e.target.value)} class="border-t-0 border-l-0 border-r-0 border-b-2 w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-sm font-bold">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={e => setPassword1(e.target.value)} class="border-t-0 border-l-0 border-r-0 border-b-2 w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div class="flex flex-col pt-4">
                    <label for="confirm-password" class="text-sm font-bold">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm Password" onChange={e => setPassword2(e.target.value)} class="border-t-0 border-l-0 border-r-0 border-b-2 w-full py-1 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div className="flex flex-col pt-4">
                <label for="role" class="text-sm font-bold">Register as:</label>
                <select defaultValue={role} onChange={e => setRole(e.target.value)} class="border-t-0 border-l-0 border-r-0 border-b-2 w-full py-1 px-3 text-gray-700 mt-1 leading-tight " name="role" id="role">
                    <option value="FARMER">Farmer</option>
                    <option value="INVESTOR">Investor</option>
                    <option value="LEASER">Leaser</option>
                    {/* <option value="ADMIN">Admin</option> */}
                </select>
                </div>

                <input type="submit" value="Register" class="bg-sky-800 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
            <div class="text-center pt-12 pb-12">
                <p>Already have an account? <Link to="/auth/login" class="underline font-semibold">Login here.</Link></p>
            </div>
            <div class="text-center ">
                <p><Link to="/" class=" font-semibold">&#8592; Back home</Link></p>
            </div>
        </div>

    </div>

    <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-screen hidden md:block" src="https://images.pexels.com/photos/8540244/pexels-photo-8540244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background" />
    </div>
</div>

</div>
    </div>
  )
}
