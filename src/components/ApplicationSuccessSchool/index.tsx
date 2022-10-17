import React from 'react'
import Icon from '../Icons'
import InputBox from '../InputBox';
import BookingCard from './BookingCard';
const ApplicationSuccessSchool = () => {
  return (
    <div className='mx-4 md:mx-12 flex md:justify-between flex-col lg:flex-row py-5 ' >
        <BookingCard />
        <div className='py-5' >
            <div className='bg-white rounded-[20px] p-5 md:px-10 max-w-[473px] lg:w-[473px] ' >
                <h1 className='text-[16px] leading-[25.6px] font-bold' >Create Account</h1>
                <p className='text-[10px] leading-[16px] font-medium text-[#8B8BA4] py-1' >Create Account to have an history of all you do on Onboard</p>
                <div className='py-3' >
                    <InputBox iconId='green-mail-icon' height={24} width={24} placeholder='Email here' whole={true} label="Email Address" label2='*' classname='rounded-[4px] ' />
                </div>
                <div className='py-3' >
                    <InputBox iconId='lock-icon' height={24} width={24} placeholder='Password here' whole={true} label="Enter password" label2='*' classname='rounded-[4px] ' />
                </div>
                <div className='py-3' >
                    <InputBox iconId='lock-icon' height={24} width={24} placeholder='Password here' whole={true} label="Confirm password" label2='*' classname='rounded-[4px] ' />
                </div>
                <div className='py-3 flex justify-end' >
                    <button className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] md:w-auto">
                        <p className="text-center">Proceed</p>
                        <Icon width={24} height={24} id="arrow-right-icon" />
                    </button>
                </div>
            </div>
            <div>
                <p className='text-[16px] leading-[25.6px] py-2' >Not interested?</p>
                <div className='py-2 flex w-full max-w-[473px]' >
                    <button className="col-span-2 w-full justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] ">
                        <p className="text-center">Go Home</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ApplicationSuccessSchool;
