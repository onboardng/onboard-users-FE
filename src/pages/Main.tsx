import { Link } from 'react-router-dom'
import React from 'react'

import image from '../assets/onboard-start.png';
import school from '../assets/main-school.png';
import travel from '../assets/main-travel.png';

const Main = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center relative">
        <div className="flex flex-col items-center absolute top-2 md:top-5 left-1/2 -translate-x-1/2 z-20">
            <p className="text-sm md:text-2xl text-white font-semibold">Welcome to Onboard</p>
            <p className="text-xs md:text-sm text-white">What would you like to experience?</p>
        </div>
        <a href="https://hotels.onboardng.com" target="_blank" rel="noreferrer" className="w-full md:w-1/2 h-1/2 md:h-full grid place-items-center relative overflow-hidden">
            <img src={travel} alt="" className="w-full h-full object-cover animate-zoom absolute top-0 left-0" />
            <div className="w-full h-full grid place-items-center z-10">
                <div className="flex flex-col items-center">
                    <img src={image} alt="" className="" />
                    <p className="text-xl text-white font-semibold">Travels</p>
                </div>
            </div>
        </a>
        <Link to="/home-page" className="w-full md:w-1/2 h-1/2 md:h-full grid place-items-center relative overflow-hidden">
            <img src={school} alt="" className="w-full h-full object-cover animate-zoom absolute top-0 left-0" />
            <div className="w-full h-full grid place-items-center z-10">
                <div className="flex flex-col items-center">
                    <img src={image} alt="" className="" />
                    <p className="text-xl text-white font-semibold">Education</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Main