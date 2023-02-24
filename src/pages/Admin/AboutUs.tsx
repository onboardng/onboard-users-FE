import React from 'react'

import Footer from "../../components/school/Footer"
import Navbar from "../../components/school/Navbar"

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="w-full h-auto md:h-[900px] flex flex-col md:flex-row gap-[40px] bg-[#F7F7F7] px-5 pt-[50px]">
        <div className="max-w-full w-[639px] h-auto md:h-fullgrid place-items-center">
          <div className="w-full md:w-[639px] h-auto md:h-[577px] bg-white rounded-[20px] my-5 md:my-0 grid place-items-center">
            <img src="/svgs/OnboardLogoBlue.svg" alt="onboard logo" className="w-[70%]" />
          </div>
        </div>
        <div className="w-[808px] max-w-full h-full flex flex-col overflow-hidden overflow-y-scroll">
          <div className="flex flex-col my-10">
            <p className="font-semibold text-[40px] leading-[56px] mb-[30px]">We are your travels solutions</p>
            <p className="font-medium text-lg leading-[32px] mb-[30px]">
              Onboard NG is a modern one-stop education and travel solutions offering study abroad assistance and guidance to candidate students from Africa and around the globe. We exist as a TravelTech undertaking with years of experience and an increasingly level of success stories under our belt. <br />
              Furthermore, Our Travel space is also dedicated to rendering affordable and effective travel assistance, bridging the gap and demystifying borders. <br />
              Our platform seeks to not only help students advance their academic pursuits, but to also provide hitch free travel packages while offering affordable educational options from our partner institutions in several countries. <br />
              Our services are also full-proof and certified with favorable reviews over the years. Much more than that OnBoard NG is a growing community of diverse individuals making a change in different spheres around the
            </p>
          </div>
          <div className="flex flex-col my-10">
            <p className="font-semibold text-[40px] leading-[56px] mb-[30px]">Our Mission</p>
            <p className="font-medium text-lg leading-[32px] mb-[30px]">
              Creating opportunities with no boundaries.
            </p>
          </div>
          <div className="flex flex-col my-10">
            <p className="font-semibold text-[40px] leading-[56px] mb-[30px]">Our Vision</p>
            <p className="font-medium text-lg leading-[32px] mb-[30px]">
              To create wholesome experiences by building bridges and opening borders.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs