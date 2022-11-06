import React from 'react'
import InputBox from '../InputBox'

const Subscribe = () => {
  return (
    <div className='bg-[#DCDCFF] mx-4 md:mx-12 space-x-0 md:mt-0 mt-10' >
        <div className='flex justify-center py-5 md:py-14' >
            <section className='text-center p-[20px] md:p-[50px]' >
                <h3 className='font-semibold text-[20px] leading-[28px] md:text-[28px] md:leading-[39.2px] ' >Interested in Travel deals?</h3>
                <h5 className='font-bold text-[16px] leading-[25.6px] md:text-[20px] md:leading-[32px] ' >We’ll be notifying you as they drop</h5>
                <aside className='md:flex md:justify-center py-5 md:py-10' >
                    <div className="flex gap-5 flex-col xl:flex-row justify-center xl:justify-start xl:items-center items-center relative">
                        <InputBox placeholder="Enter email address" iconId="mail-icon" height={24} width={24} isRounded />
                        <button className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto">
                            <p className="text-center">Subscribe</p>
                        </button>
                    </div>
                </aside>
                <p className='text-[10px] leading-[16px] font-medium md:text-[14px] md:leading-[22.4px]' >Your privacy is important to us, so we'll never spam you or share your info with third parties. </p>
                <p className='text-[10px] leading-[16px] font-medium md:text-[14px] md:leading-[22.4px]' >Take a look at our privacy policy. <span className='hidden md:inline' >You can unsubscribe at any time.</span></p>
                <p className='text-[10px] leading-[16px] font-medium md:text-[14px] md:leading-[22.4px] md:hidden' >You can unsubscribe at any time.</p>
            </section>
        </div>
    </div>
  )
}

export default Subscribe