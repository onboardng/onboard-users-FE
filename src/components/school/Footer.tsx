import React from "react";
import Logo from "../../assets/Onboard Logo - White 1.svg";
import Icon from "../Icons";

const Footer = () => {
  const services = ["Flights", "Hotels", "Schools", "Visas"];
  const onboard = ["About Us", "Contact Us"];
  return (
    <div className="bg-[#6FA7B4] p-5 md:p-10">
      <div className="flex md:flex-row flex-col md:justify-between w-full h-full">
        <div className="h-full">
          <aside>
            <img src={Logo} alt="Logo" />
          </aside>
          <aside className="flex justify-between items-start h-full text-white w-[70%] md:w-full py-10">
            <aside className="md:mr-28">
              <p className="font-bold text-[16px] leading-[25.6px] pb-3">Services</p>
              <ul>
                {services?.map((service) => (
                  <li className="font-medium text-[14px] leading-[22.4px]" key={service}>
                    {service}
                  </li>
                ))}
              </ul>
            </aside>
            <aside>
              <p className="font-bold text-[16px] leading-[25.6px] pb-3">Onboard</p>
              <ul>
                {onboard?.map((service) => (
                  <li className="font-medium text-[14px] leading-[22.4px]" key={service}>
                    {service}
                  </li>
                ))}
              </ul>
            </aside>
          </aside>
        </div>
        <div className="md:flex md:items-center text-white">
          <aside>
            <div className="flex">
              <span className="px-1">
                <Icon width={24} height={21} id="twitter-icon" />
              </span>
              <span className="px-1">
                <Icon width={24} height={24} id="facebook-icon" />
              </span>
              <span className="px-1">
                <Icon width={24} height={24} id="instagram-icon" />
              </span>
            </div>
            <div>
              <p className="font-normal text-[16px] pt-2">© {new Date().getFullYear()} Onboard All Rights Reserved.</p>
              <p className="font-normal text-[16px]">Terms and Conditions</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Footer;
