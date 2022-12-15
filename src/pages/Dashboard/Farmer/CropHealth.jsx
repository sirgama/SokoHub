import React, {useState, useEffect} from 'react'
import axios from 'axios'

import FileBase from 'react-file-base64';

export default function CropHealth() {
    const [listing, setSingleFile] = useState({})
    const [health, setHealth] = useState({na:'not availale'})
    console.log(listing)
    let list = []
    list.push(listing.base64)
    console.log(list)
    const handlesubmit = async () => {
        // let reader = new FileReader();
        // reader.onloadend = function() {
        //   document.write('RESULT: ', reader.result);
        // }
        // reader.readAsDataURL(file);
      
     let  headers = {
            "Content-Type": "application/json",
            "Api-Key": "ZfYQwVXZYsg58MfkoG55bZUo3OFD2FHaKrAuDwReuvZ5yo1Oj9",
        }
     
    //   axios.post(`https://api.plant.id/v2/usage_info`, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "Api-Key": "ZfYQwVXZYsg58MfkoG55bZUo3OFD2FHaKrAuDwReuvZ5yo1Oj9",
    //     }
    // })  
    await axios.post(`https://api.plant.id/v2/health_assessment`, {
        withCredentials: true,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        images: list
      
      },{
        auth: {
          username: "client",
          password: "ZfYQwVXZYsg58MfkoG55bZUo3OFD2FHaKrAuDwReuvZ5yo1Oj9"
      }}).then(function(response) {
        setHealth(response.data)
        console.log('Authenticated', response);
      }).catch(function(error) {
        console.log('Error on Authentication', error);
      });
    }
//   console.log(health?.health_assessment.diseases)
  return (
    <div className='p-8 flex '>
        <div>
        <h1 className="font-bold text-2xl underline underline-offset-8">Crop Health and Information Checker</h1>
        <p className="font-normal py-3">Upload an image of a crop you want to check it's health or information.</p>
        <div className="flex flex-col justify-start mx-auto p-10">
        <FileBase  type="file" multiple={false} onDone={({ base64 }) => setSingleFile({base64 })} onChange={(e) => e.target.files[0]} />
        
        <div className="relative w-full py-4 max-w-full flex-grow flex-1 text-left">
          <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-9 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handlesubmit}>Check</button>
        </div>
        </div>
        </div>
        {/* {health !== undefined ? <div className="w-full flex flex-row">
            <div>
                    
                <a href="#" class="flex flex-col items-center bg-white  shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={health?.images ? health?.images[0]?.url : undefined} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    </div>
                </a>

            </div>
            <div>
                
                <div class="w-full max-w-sm p-4 bg-white shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Connect wallet
                    </h5>
                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
                    <ul class="my-4 space-y-3">
                        <li>
                            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                            </a>
                        </li>
                        
                    </ul>
                    <div>
                        <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                            <svg class="w-3 h-3 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                            Why do I need to connect with my wallet?</a>
                    </div>
                </div>

            </div>
        </div> : ""} */}
        {health?.is_plant == false ? <div class="container mx-auto my-auto">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        <img src={health?.images ? health?.images[0]?.url : "https://avatars0.githubusercontent.com/u/35900628?v=4"} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                </div>
                
                <div class="mt-6">
                    <h1 class="font-bold text-center text-3xl text-gray-900"></h1>
                    <p class="text-center text-sm text-gray-400 font-medium"></p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5 px-6 mt-10">
                        <a href="#" class="text-gray-200 block rounded-lg text-center  leading-6 px-6 py-3 bg-rose-900 hover:bg-black hover:text-white font-extrabold">Not a Plant</a>
                    </div>
                

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Sorry, you have not uploaded a plant. Try again</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                           

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div> : 
    
    <div class="container mx-auto my-auto">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        <img src={health?.images ? health?.images[0]?.url : "https://avatars0.githubusercontent.com/u/35900628?v=4"} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                </div>
                
                <div class="mt-6">
                    <h1 class="font-bold text-center text-3xl text-gray-900"></h1>
                    <p class="text-center text-sm text-gray-400 font-medium"></p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    {health?.health_assessment?.is_healthy == false ? <div class="my-5 px-6 mt-10">
                        <a href="#" class="text-gray-200 block rounded-lg text-center  leading-6 px-6 py-3 bg-rose-900 hover:bg-rose-800 hover:text-white font-extrabold">Not Healthy</a>
                    </div> : health?.health_assessment?.is_healthy == true ? <div class="my-5 px-6 mt-10">
                        <a href="#" class="text-gray-200 block rounded-lg text-center  leading-6 px-6 py-3 bg-emerald-900 hover:bg-emerald-900 hover:text-white font-extrabold">Healthy</a>
                    </div> : ''}
                

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Diseases that affect this crop</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            {health?.health_assessment?.diseases?.slice(0,15).map(disease => (
                                <a href="#" class=" border-t border-gray-100 text-gray-600  pl-6 pr-3 w-full py-1 hover:bg-gray-100 transition duration-150 ">
                                <span class="text-gray-500 text-xs">{disease.name}</span>
                            </a>
                            ))}
                    
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>}
    </div>
  )
}
