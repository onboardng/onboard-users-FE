import React from 'react'
import Icon from '../Icons'

const ApplicationSuccessSchool = () => {
  return (
    <div className='mx-4 md:mx-12 flex flex-col md:flex-row py-5 ' >
        <div className='bg-white rounded-[10px]' >
            <div className='relative'>
                <img alt="success" src={`${process.env.PUBLIC_URL}/svgs/Image.svg`} className="rounded-t-[10px]" />
                <div className='absolute w-full h-full bg-[#00000060] top-0 rounded-t-[10px] flex items-center justify-center text-white font-medium text-[24px] leading-[38.4px] ' >Booking Successful</div>
            </div>
            <div>
                <div className='text-center py-5' >
                    <p className='text-[16px] leading-[25.6px]' >Booking ID</p>
                    <div className='flex md:flex-row flex-col justify-center items-center py-1' >
                        <h3 className='font-semibold text-[28px] leading-[39.2px] md:mr-3' >AB-12345678</h3>
                        <span className='flex justify-between items-center' ><Icon id='copy-icon' height={24} width={24} /> <span className='pl-1 text-primary font-medium text-[14px] leading-[22.4px]' >Copy</span></span>
                    </div>
                    <p className='text-[16px] leading-[25.6px] text-[#8B8BA4] ' >An Email and a Text message has been sent to you containing your booking ID</p>
                </div>
                <div className='text-center pb-5 pt-2' >
                    <h4 className='font-medium text-[24px] leading-[38.4px]' >University of Lagos</h4>
                    <p className='flex text-[16px] leading-[25.6px] justify-center items-center text-[#8B8BA4] ' ><Icon id='graduation-icon' height={24} width={24} /><span className='px-2' >Bachelor of Science in Marketing</span></p>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default ApplicationSuccessSchool