import React from "react";

import Footer from "../../components/school/Footer";
import Navbar from "../../components/school/Navbar";
import MailContainer from "./MailContainer";
import { LIST } from "./LIST";

interface IconProps {
  icon: JSX.Element
  name: string
  url: string
};

const Icon = ({icon, name, url}:IconProps) => {
  return (
    <div className="flex items-center gap-[15px]">
      <div className="w-[44px] h-[44px] bg-primary grid place-items-center rounded-[10px]">
        {icon}
      </div>
      <a href={url} target="_blank" rel="noreferrer">{name}</a>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col md:flex-row gap-[119px] bg-[#F7F7F7] px-5 pt-[50px] pb-[80px]">
        <div className="w-[473px] max-w-full h-full flex items-center justify-center my-auto">
          <div className="w-full h-[321px] bg-white rounded-[20px] flex flex-col gap-[30px] p-[30px]">
            {LIST.map((_, index) => (
              <Icon key={index} {..._} />
            ))}
          </div>
        </div>
        <div className="w-[808px] max-w-full flex flex-col">
          <p className="font-semibold text-[40px] leading-[56px] mb-[30px]">Reach out to us</p>
          <p className="font-medium text-lg leading-[32px] mb-[30px]">We will glady give a succinct response to your enquiries.</p>
          <MailContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;