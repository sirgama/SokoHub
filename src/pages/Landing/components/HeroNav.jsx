import React from "react";
import { Link } from "react-router-dom";
import Heroimg from '../../../assets/heroimg.jpg'

export default function HeroNav() {
    return (
        <div>
            <div className=" bg-white flex flex-col min-h-screen w-full">
                <div>
                    <div className="bg-gray-200 px-4 py-4">
                        <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
                            <div>
                                <a
                                    href="#"
                                    className="inline-block py-2 text-green-800 text-2xl font-bold"
                                >
                                    SokoHub.
                                </a>
                            </div>

                            <div>
                                <div className="hidden md:block">
                                    <a
                                        href="#"
                                        className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#solutions"
                                        className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                                    >
                                        Solutions
                                    </a>

                                    <a
                                        href="#faq"
                                        className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                                    >
                                        FAQ
                                    </a>
                                    <a
                                        href="#start"
                                        className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>

                            <div className="hidden md:block">
                            <Link to='/auth/login'><a
                                    href="#"
                                    className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                                >
                                    Login
                                </a></Link>
                                <Link to='/auth/signup'><a
                                    href="#"
                                    className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                                >
                                    Sign up
                                </a></Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-200 md:overflow-hidden">
                        <div className="px-4 py-16">
                            <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
                                <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                                    Providing a means towards sustainable food production.
                                </h1>

                                <p className="text-gray-600 md:text-xl md:px-18">
                                    
                                </p>

                                <div className="hidden md:block h-40 w-40 rounded-full bg-emerald-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div>

                                <div className="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"></div>
                            </div>
                        </div>

                        <svg
                            className="fill-current bg-gray-200 text-white hidden md:block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill-opacity="1"
                                d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                            ></path>
                        </svg>
                    </div>

                    <div
                        className="max-w-4xl -mt-72 mx-auto bg-white shadow-lg relative z-20 hidden md:block"
                        // style="margin-top: -320px; border-radius: 20px;"
                    >
                        <div
                            className="h-20 w-20 rounded-full bg-amber-800 absolute top-0 left-0 -ml-10 -mt-10"
                            // style="z-index: -1;"
                        ></div>

                        <div
                            className="h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12"
                            // style="z-index: -1;"
                        ></div>

                        <div className="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
                        {/* <div className="flex h-[550px]" 
                        // style="height: 550px;"
                        >
                            <div className="w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg">
                                <div className="text-center mb-10">
                                    <div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
                                    <div className="h-2 rounded-full bg-blue-800"></div>
                                </div>

                                <div className="text-center mb-10">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
                                    <div className="h-2 rounded-full bg-gray-300"></div>
                                </div>

                                <div className="text-center mb-10">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
                                    <div className="h-2 rounded-full bg-gray-300"></div>
                                </div>

                                <div className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
                                    <div className="h-2 rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="flex-1 py-6 px-8">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-2/3 px-4">
                                        <div className="flex flex-wrap -mx-4 mb-10">
                                            <div className="w-1/4 px-4">
                                                <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                                                    <div className="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto"></div>
                                                    <div className="h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                            </div>
                                            <div className="w-1/4 px-4">
                                                <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                                                    <div className="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto"></div>
                                                    <div className="h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                            </div>
                                            <div className="w-1/4 px-4">
                                                <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                                                    <div className="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto"></div>
                                                    <div className="h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                            </div>
                                            <div className="w-1/4 px-4">
                                                <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                                                    <div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
                                                    <div className="h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-32 percentage mb-10 pt-2">
                                            <div className="h-4 bg-gray-200 w-64 mb-4 block"></div>
                                            <div className="h-4 bg-gray-200 w-32 mb-4 block"></div>
                                            <div className="h-4 bg-gray-200 w-40 mb-4 block"></div>
                                            <div className="h-4 bg-gray-200 w-20 mb-4 block"></div>
                                        </div>

                                        <div className="w-full flex flex-wrap mb-6">
                                            <div className="w-1/2">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                                                    <div>
                                                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                                        <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                                                    <div>
                                                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                                        <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-wrap">
                                            <div className="w-1/2">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                                                    <div>
                                                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                                        <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                                                    <div>
                                                        <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                                        <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 px-4">
                                        <div className="rounded-lg shadow-lg p-6">
                                            <div className="block w-12 h-2 rounded-full bg-gray-200 mb-6"></div>

                                            <svg
                                                height="150"
                                                width="150"
                                                viewBox="0 0 20 20"
                                                className="mx-auto mb-12"
                                            >
                                                <circle r="10" cx="10" cy="10" fill="#4299e1" />
                                                <circle
                                                    r="5"
                                                    cx="10"
                                                    cy="10"
                                                    fill="transparent"
                                                    stroke="#2b6cb0"
                                                    stroke-width="10"
                                                    stroke-dasharray="11 31.4"
                                                    transform="rotate(-90) translate(-20)"
                                                />
                                            </svg>

                                            <div className="flex flex-wrap -mx-2 mb-10">
                                                <div className="w-1/3 px-2">
                                                    <div className="block h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                                <div className="w-1/3 px-2">
                                                    <div className="block h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                                <div className="w-1/3 px-2">
                                                    <div className="block h-2 rounded-full bg-gray-200"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between my-10">
                                            <div>
                                                <div className="h-2 w-10 bg-gray-300 rounded-full mb-2"></div>
                                                <div className="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
                                                <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
                                            </div>
                                            <div>
                                                <div className="ml-auto h-2 w-5 bg-gray-300 rounded-full mb-2"></div>
                                                <div className="ml-auto h-2 w-6 bg-gray-300 rounded-full mb-2"></div>
                                                <div className="ml-auto h-2 w-8 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="text-right flex justify-end">
                                            <div className="rounded-lg h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                                            <div className="rounded-lg h-8 w-20 px-4 bg-green-400"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className=" ">
                            <img src={Heroimg} alt="" />
                        </div>
                    </div>

                    <div className="px-4 md:hidden">
                        <div
                            className="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
                            // style="border-radius: 20px;"
                        >
                            <div className="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
                            <div className="flex" 
                            // style="height: 340px;"
                            >
                                <div className="w-16 bg-gray-200 px-2 py-6 overflow-hidden rounded-bl-lg">
                                    <div className="text-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-green-800 mb-2 mx-auto"></div>
                                        <div className="h-2 w-8 mx-auto rounded-full bg-blue-800"></div>
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"></div>
                                        <div className="h-2 w-8 mx-auto rounded-full bg-gray-300"></div>
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"></div>
                                        <div className="h-2 w-8 mx-auto rounded-full bg-gray-300"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"></div>
                                        <div className="h-2 w-8 mx-auto rounded-full bg-gray-300"></div>
                                    </div>
                                </div>
                                <div className="flex-1 py-6 px-4">
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-1/3 px-2">
                                            <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                                                <div className="w-4 h-4 rounded-full bg-green-600 mb-2 mx-auto"></div>
                                                <div className="h-2 w-8 mx-auto rounded-full bg-gray-200"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/3 px-2">
                                            <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                                                <div className="w-4 h-4 rounded-full bg-blue-600 mb-2 mx-auto"></div>
                                                <div className="h-2 w-8 mx-auto rounded-full bg-gray-200"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/3 px-2">
                                            <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                                                <div className="w-4 h-4 rounded-full bg-orange-600 mb-2 mx-auto"></div>
                                                <div className="h-2 w-8 mx-auto rounded-full bg-gray-200"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-2 mb-6">
                                        <div className="w-1/2 px-2">
                                            <div className="shadow h-24 p-2 rounded-lg">
                                                <div className="h-20 percentage pt-2">
                                                    <div className="h-2 bg-gray-200 w-24 mb-2 block"></div>
                                                    <div className="h-2 bg-gray-200 w-12 mb-2 block"></div>
                                                    <div className="h-2 bg-gray-200 w-20 mb-2 block"></div>
                                                    <div className="h-2 bg-gray-200 w-8 mb-2 block"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <div className="rounded-lg shadow px-2 py-2">
                                                <div className="block w-8 h-2 rounded-full bg-gray-200 mb-2"></div>

                                                <div className="mb-2">
                                                    <svg
                                                        height="50"
                                                        width="50"
                                                        viewBox="0 0 20 20"
                                                        className="mx-auto"
                                                    >
                                                        <circle r="10" cx="10" cy="10" fill="#ddd" />
                                                        <circle
                                                            r="5"
                                                            cx="10"
                                                            cy="10"
                                                            fill="transparent"
                                                            stroke="#eee"
                                                            stroke-width="10"
                                                            stroke-dasharray="11 31.4"
                                                            transform="rotate(-90) translate(-20)"
                                                        />
                                                    </svg>
                                                </div>

                                                <div className="flex flex-wrap -mx-2">
                                                    <div className="w-1/3 px-2">
                                                        <div className="block h-2 rounded-full bg-gray-200"></div>
                                                    </div>
                                                    <div className="w-1/3 px-2">
                                                        <div className="block h-2 rounded-full bg-gray-200"></div>
                                                    </div>
                                                    <div className="w-1/3 px-2">
                                                        <div className="block h-2 rounded-full bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-wrap mb-2">
                                        <div className="w-1/2">
                                            <div className="flex items-center">
                                                <div className="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                                                <div>
                                                    <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                                                    <div className="h-2 w-6 bg-gray-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="flex items-center">
                                                <div className="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                                                <div>
                                                    <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                                                    <div className="h-2 w-6 bg-gray-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-wrap mb-6">
                                        <div className="w-1/2">
                                            <div className="flex items-center">
                                                <div className="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                                                <div>
                                                    <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                                                    <div className="h-2 w-6 bg-gray-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="flex items-center">
                                                <div className="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                                                <div>
                                                    <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                                                    <div className="h-2 w-6 bg-gray-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right flex justify-end">
                                        <div className="rounded-lg h-6 w-16 px-4 bg-gray-200 mr-2"></div>
                                        <div className="rounded-lg h-6 w-16 px-4 bg-green-400"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}
