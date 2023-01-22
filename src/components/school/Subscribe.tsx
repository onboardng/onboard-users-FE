import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ReactPixel from "react-facebook-pixel"

import { useHttpRequest } from '../../hooks/useHttpRequest'
import Spinner from '../../assets/icons/Spinner'
import { Envelope } from '../../assets/icons'

const baseUrl = process.env.REACT_APP_BACKEND_API

const Subscribe = () => {
    const [email, setEmail] = useState<string>('')
    const {error, loading, sendRequest} = useHttpRequest()
    const handlePixel = () => ReactPixel.trackCustom('Subscribe to Newsletter')

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        handlePixel()
        if(!email || email === '') return toast.error('Please enter a valid email.')
        const headers = { 'Content-Type': 'application/json' }
        try {
            const data = await sendRequest(`${baseUrl}/mail-subscription/subscribe`, 'POST', JSON.stringify({email}), headers)
            if(!data || data === undefined) return
            const { message } = data
            toast.success(`${message}`)
        } catch (error) {}
        setEmail('')
    }

    useEffect(() => {
        error && toast.error(`${error}`)
    },[error])
  return (
    <div className='w-full bg-[#DCDCFF] mx-0 md:mx-12 space-x-0 md:mt-0 mt-10' >
        <div className='w-full flex justify-center py-5 md:py-14' >
            <section className='w-full text-center p-[20px] md:p-[50px]' >
                <h3 className='font-semibold text-[20px] leading-[28px] md:text-[28px] md:leading-[39.2px] ' >Interested in Travel deals?</h3>
                <h5 className='font-bold text-[16px] leading-[25.6px] md:text-[20px] md:leading-[32px] ' >We’ll be notifying you as they drop</h5>
                <form onSubmit={handleSubmit} className='md:flex md:justify-center py-5 md:py-10' >
                    <div className="w-full flex gap-5 flex-col xl:flex-row justify-center xl:justify-start xl:items-center items-center relative">
                        <div className='w-[350px] max-w-full h-[60px] flex items-center gap-4 bg-white border-2 border-[#DADAE7] focus-within:border-primary pl-[15px] rounded-lg'>
                            <Envelope />
                            <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder='Enter email address' className='w-full h-full bg-transparent outline-none border-none' />
                        </div>
                        <button className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto">
                            {loading ? <Spinner /> : 'Subscribe'}
                        </button>
                    </div>
                </form>
                <p className='text-[10px] leading-[16px] font-medium md:text-[14px] md:leading-[22.4px]' >Your privacy is important to us, so we'll never spam you or share your info with third parties. </p>
                <p className='text-[10px] leading-[16px] font-medium md:text-[14px] md:leading-[22.4px]' >Take a look at our privacy policy. <span className='hidden md:inline' >You can unsubscribe at any time.</span></p>
                <p className='text-[10px] leading-[16px] font-medium md:text-[14px] md:leading-[22.4px] md:hidden' >You can unsubscribe at any time.</p>
            </section>
        </div>
    </div>
  )
}

export default Subscribe