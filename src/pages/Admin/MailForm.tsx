import { EmailFormFields } from "react-mailchimp-subscribe";
import React, { FormEvent, useEffect} from "react";
import { toast } from "react-toastify";

import { useFormInputs } from "../../hooks";
import Envelope from "./icons/Envelope";
import UserAlt from "./icons/UserAlt";

interface Props {
    message: string | Error | null
    status: "error" | "success" | "sending" | null
    onValidated: (field: EmailFormFields) => void
}

const initialState = {name: "", email: "", text: ""};

const MailForm = ({message, onValidated, status}:Props) => {
    const {handleChange, inputs} = useFormInputs(initialState);
    const {name, email, text} = inputs;

    const handleSubscribe = async(e: FormEvent) => {
      e.preventDefault()
      const payload = {
        EMAIL: email,
        MMERGE5: name,
        MMERGE6: text,
      }
      onValidated(payload)
      status === "success" && toast.success(`${message}`)
    }

    useEffect(() => {
        status === "success" && toast.success(`${message}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[status])

    useEffect(() => {
        status === "error" && toast.error(`${message}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[status])

  return (
    <div>
        <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-[30px]">
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
              <label htmlFor="text" className="text-[#8B8BA4] leading-[26px]">Message</label>
              <textarea name="text" onChange={handleChange} className="w-full h-[210px] outline-none border-none bg-transparent text-lg font-medium leading-[32px] placeholder:text-black" placeholder="Enter your message here" required ></textarea>
            </div>
            <div className="w-full flex items-center"></div>
            <button type="submit" className="w-[143px] h-[42px] self-end bg-primary text-white outline-none border-none rounded-[4px] text-center">
              Send Message
            </button>
          </form>
    </div>
  )
}

export default MailForm