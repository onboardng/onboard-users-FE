import React from 'react'

import Footer from "../../components/school/Footer"
import Navbar from "../../components/school/Navbar"

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="w-full flex flex-col md:flex-row gap-[40px] bg-[#F7F7F7] px-5 pt-[50px] pb-[80px]">
        <div className="max-w-full w-[639px] h-auto md:h-[577px] bg-white rounded-[20px] my-5 md:my-0 grid place-items-center">
          <img src="/svgs/OnboardLogoBlue.svg" alt="onboard logo" className="w-[70%]" />
        </div>
        <div className="w-[808px] max-w-full flex flex-col">
          <p className="font-semibold text-[40px] leading-[56px] mb-[30px]">We are your travels solutions</p>
          <p className="font-medium text-lg leading-[32px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit eros, aliquam vel mollis et, tincidunt ut nisi. Vivamus eget erat sed sapien tempor volutpat. Sed auctor, magna quis congue bibendum, urna est consequat libero, at aliquam diam nisl eget lectus. Nulla facilisi. Praesent velit augue, porttitor sed lacinia in, scelerisque ac eros. In hac habitasse platea dictumst. Donec et turpis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut euismod semper ligula ut hendrerit. Aliquam erat volutpat.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs