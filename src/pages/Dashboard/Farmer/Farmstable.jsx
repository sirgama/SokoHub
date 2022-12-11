import React from 'react'
import './Farmstable.css'

export default function Farmstable() {
  return (
    <div>
        <div className="">
	<div className="">
		<div className="overflow-auto sm:overflow-x-scroll  ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-gray-800 text-gray-500">
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
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
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
