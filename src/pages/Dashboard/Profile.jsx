import React, { useContext, useState } from 'react'
import AuthContext from '../../context/Authcontext';
import Dashnav from './components/Dashnav'
import ProfileModal from './components/ProfileModal';
import './Profile.css'

export default function Profile() {
    const { user, logoutUser } = useContext(AuthContext);
    const [modal, setModal] = useState(true)

  const handleModal = () => setModal(true)
    
  return (
    <>
    <h1 className="py-7 px-10 underline underline-offset-8 text-2xl font-semibold ">Profile</h1>
    <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                    <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                </div>
            </div>
            <div class="w-full text-center mt-20">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div class="p-3 text-center">
                        <span class="text-base font-bold block uppercase tracking-wide text-slate-700">35659687</span>
                        <span class="text-sm text-slate-400">ID Number</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-base font-bold block uppercase tracking-wide text-slate-700">0722000000</span>
                        <span class="text-sm text-slate-400">Phone</span>
                    </div>

                    <div class="p-3 text-center">
                        <span class="text-base font-bold block uppercase tracking-wide text-slate-700">{user.username}</span>
                        <span class="text-sm text-slate-400">Email</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold uppercase leading-normal mb-1">{user.first_name} {user.last_name}</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{user.role}
            </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                    <div class="font-bold text-gray-700 hover:text-white bg-green-500 py-2 px-6 rounded-lg cursor-pointer " onClick={handleModal}>Update Profile</div>
                </div>
            </div>
        </div>
    </div>
</div>
{modal && <ProfileModal setModal={setModal} />}
  </>
  )
}
