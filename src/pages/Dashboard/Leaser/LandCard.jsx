import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/Authcontext';

export default function LandCard() {
    const { user, logoutUser } = useContext(AuthContext);

    const [lands, setLands] = useState([])
    const headers = {
        'Authorization': `Bearer ${user.jti}`,
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }

    const getLands = () => {
        axios.get(`https://sokohub.up.railway.app/lessor/land/`,   headers   ).then((res) => {
                    setLands(res.data);
         
        });
      };
    
      useEffect(() => {
        getLands();
      }, []);
      console.log(lands)
  return (
    <div>
        <table className="table text-gray-300 border-separate space-y-6 text-sm">
				<thead className="bg-gray-600 text-gray-200">
					<tr>
						<th className="p-3">Location</th>
						<th className="p-3 text-left">Length</th>
						<th className="p-3 text-left">Width</th>
						<th className="p-3 text-left">Approved</th>
						<th className="p-3 text-left">Lease Duration</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-sky-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<div className="ml-3">
									
									<div className="text-gray-300">MaiMahiu</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							310
						</td>
						<td className="p-3 font-bold">
							190
						</td>
						<td className="p-3">
							<span className="bg-pink-200 text-gray-500 rounded-md px-2">No</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i className="material-icons-outlined text-base"> 15 Months</i>
							</a>
							
						</td>
					</tr>
					<tr className="bg-sky-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<div className="ml-3">
									
									<div className="text-gray-300">MaiMahiu</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							120
						</td>
						<td className="p-3 font-bold">
							110
						</td>
						<td className="p-3">
							<span className="bg-green-100 text-gray-500 rounded-md px-2">Yes</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i className="material-icons-outlined text-base">24Months</i>
							</a>
							
						</td>
					</tr>
					<tr className="bg-sky-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<div className="ml-3">
									
									<div className="text-gray-300">Narok</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							130
						</td>
						<td className="p-3 font-bold">
							80
						</td>
						<td className="p-3">
							<span className="bg-green-100 text-gray-500 rounded-md px-2">Yes</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i className="material-icons-outlined text-base">9 Months</i>
							</a>
							
						</td>
					</tr>
					<tr className="bg-sky-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<div className="ml-3">
									
									<div className="text-gray-300">Longichu</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							180
						</td>
						<td className="p-3 font-bold">
							250
						</td>
						<td className="p-3">
							<span className="bg-green-100 text-gray-500 rounded-md px-2">Yes</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i className="material-icons-outlined text-base">12 Months</i>
							</a>
							
						</td>
					</tr>
					
					
				</tbody>
			</table>
        {lands.map(land => (
            <div class="w-4/6 max-w-sm bg-white rounded-lg shadow-lg dark:bg-sky-800 dark:border-gray-700 my-2">
            <a href="#">
                <img class="p-0 rounded-t-lg" src="https://images.pexels.com/photos/13252630/pexels-photo-13252630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" />
            </a>
            <div class="px-2 pb-2 ">
                <a href="#">
                    <h5 class="text-sm py-4 font-semibold tracking-tight text-gray-900 dark:text-white">{land.location}</h5>
                    <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Lease Period - {land.lease_duration}Months</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm font-bold text-gray-900 dark:text-white">Kshs {land.price} </span>
                    <a href="#" class=""><span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">{land.approved ? 'Verified' : 'Not Verified'}</span></a>
                </div>
            </div>
        </div>
        ))}

    </div>
  )
}
