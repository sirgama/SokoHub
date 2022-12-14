import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import AuthContext from '../../../context/Authcontext';
import axios from 'axios';

export default function ProfileModal({setModal}) {
  const [open, setOpen] = useState(true)
  const { user, logoutUser } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
    const [idnumber, setIdNumber] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [profileimage, setProfileImage] = useState("");
    const owner = user.id
    const [profile, setProfile]= useState([])

    // const handlesubmit = async () => {
    //     const response = await fetch(`http://127.0.0.1:8000/auth/profile/${user.id}/`, {
    //   method: "POST",
    //   headers: {
    //     'Authorization': `Bearer ${user.jti}`,
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify({
    //     phone,
    //     idnumber,
    //     firstname,
    //     lastname,
    //     bio,
    //     profileimage,
    //   })
    // });
    // if (response.status === 201) {
    //     setModal(false)
    // } else {
    //   console.error("Something went wrong!");
    // }
    // }

    useEffect(()=> {
        axios.get(`http://127.0.0.1:8000/auth/profile/2`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': `Basic <${user.jti}>`,
            }
          }).then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
    },[])

    const handlesubmit = () => {
        let useremail = user.username
    var postData = {
        user: {
            phone: phone,
            email: useremail,
            first_name: firstname,
            last_name: lastname,
        },
        bio: bio,
        id_number: idnumber
      };
      
      let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${user.jti}`,
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      };

      
      axios.post(`http://127.0.0.1:8000/auth/profile/2/`, postData, {
        headers: {
            'Authorization': `Bearer ${user.jti}`,
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
    }
console.log(user)
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-emerald-900/75 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                       Update Your Profile
                      </Dialog.Title>
                      <form class="mt-8 max-w-2xl w-96" >
                        <div class="mx-auto max-w-2xl ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Phone Number</span>
                                <input placeholder="" type="number" onChange={e => setPhone(e.target.value)}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">ID Number</span>
                                <input placeholder="" type="number" onChange={e => setIdNumber(e.target.value)}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">First Name</span>
                                <input placeholder={user.first_name} type="text"  onChange={e => setFirstName(e.target.value)}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Last Name</span>
                                <input placeholder={user.last_name} type="text"  onChange={e => setLastName(e.target.value)} 
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Bio</span>
                                <input placeholder="" type="textarea"  onChange={e => setBio(e.target.value)}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Profile Picture</span>
                                <input placeholder="" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={e => setProfileImage(e.target.value)}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div class="flex justify-start mt-3 ml-4 p-1">
                                <ul>
                                    <li class="flex items-center py-1">
                                    </li>
                                    <li class="flex items-center py-1">
                                       
                                    </li>
                                </ul>
                            </div>
                            <div class="flex justify-start">
                                
                            </div>
                          
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handlesubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                </div>
                    </form>
                    </div>
                  </div>
                </div>
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
