import React, { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

import { useFormInputs, useHttpRequest } from "../../hooks";
import Footer from "../../components/school/Footer";
import Navbar from "../../components/school/Navbar";
import Envelope from "./icons/Envelope";
import UserAlt from "./icons/UserAlt";
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

const initialState = {name: "", email: "", message: ""};
const url = process.env.REACT_APP_BACKEND_API as string;

const ContactUs = () => {
  const {handleChange, inputs} = useFormInputs(initialState);
  const {error, loading, sendRequest} = useHttpRequest();
  const {name, email, message} = inputs;

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    const payload = {name, email, message};
    const headers = {
      'Content-Type': "application/json",
      'Authorization': `Bearer  `
    };
    try {
      const data = await sendRequest(`${url}/`, "POST", JSON.stringify(payload), headers);
      if(!data || data === undefined) return;
      console.log(data);
      toast.success(``)
    } catch(error) {};
  };

  useEffect(() => {
    error && toast.error(`${error}`)
  },[error]);
  
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
          <p className="font-medium text-lg leading-[32px] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[30px]">
            <div className="flex items-center gap-4 bg-white rounded-[10px] py-4 px-5 border-2 border-transparent focus-within:border-primary">
              <UserAlt />
              <div className="flex flex-col gap-3 flex-1">
                <label htmlFor="name" className="text-[#8B8BA4] leading-[26px]">Full Name</label>
                <input type="text" name="name" onChange={handleChange} className="w-full h-full outline-none border-none bg-transparent text-lg font-medium leading-[32px] placeholder:text-black" placeholder="Name here" required />
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-[10px] py-4 px-5 border-2 border-transparent focus-within:border-primary">
              <Envelope />
              <div className="flex flex-col gap-3 flex-1">
                <label htmlFor="email" className="text-[#8B8BA4] leading-[26px]">Email</label>
                <input type="email" name="email" onChange={handleChange} className="w-full h-full outline-none border-none bg-transparent text-lg font-medium leading-[32px] placeholder:text-black" placeholder="Tell us your email" required />
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-white rounded-[10px] py-4 px-5 border-2 border-transparent focus-within:border-primary">
              <label htmlFor="message" className="text-[#8B8BA4] leading-[26px]">Message</label>
              <textarea name="message" onChange={handleChange} className="w-full h-[210px] outline-none border-none bg-transparent text-lg font-medium leading-[32px] placeholder:text-black" placeholder="Enter your message here" required ></textarea>
            </div>
            <div className="w-full flex items-center"></div>
            <button type="submit" className="w-[143px] h-[42px] self-end bg-primary text-white outline-none border-none rounded-[4px] text-center">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;