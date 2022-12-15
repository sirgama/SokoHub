import React from 'react'
import './Farmstable.css'

export default function Farmstable() {
  return (
    <div>
        <div className="">
	<div className=" ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">My Farms</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-sky-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
      </div>
    </div>
		<div className="overflow-auto sm:overflow-visible  ">
			<table className="table text-gray-300 border-separate space-y-6 text-sm">
				<thead className="bg-gray-600 text-gray-200">
					<tr>
						<th className="p-3">Location</th>
						<th className="p-3 text-left">Length</th>
						<th className="p-3 text-left">Width</th>
						<th className="p-3 text-left">Status</th>
						<th className="p-3 text-left">Crops</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<div className="ml-3">
									<div className="text-gray-300">Limuru</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							120
						</td>
						<td className="p-3 font-bold">
							184
						</td>
						<td className="p-3">
							<span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i className="material-icons-outlined text-base">visibility</i>
							</a>
							
						</td>
					</tr>
					
					
				</tbody>
			</table>
		</div>
	</div>
</div>
    </div>
  )
}
