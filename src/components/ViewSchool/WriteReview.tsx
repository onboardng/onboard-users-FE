import React from 'react'
import Icon from '../Icons';

const WriteReview = ({close, setModal}: {close?: Function, setModal?: Function}) => {
  return (
    <>
        <div className='w-full' >
            <div className="flex justify-between bg-[#E7FAFF] rounded-t-[20px] p-5">
                <p className="text-[14px] leading-[22px] font-medium text-black">Write a review</p>
                <p className="text-[10px] leading-[16px] text-[#6FA7B4] font-bold">Clear all</p>
            </div>
            <div className='p-5' >
                <p className="mt-1 font-medium text-[14px] leading-[22px]">Rate this school</p>
                <div className="flex gap-2 mt-[14px]">
                {Array(5)
                    .fill("")
                    .map((_, index) => (
                    <Icon id="star-icon" width={18} height={17} key={index} />
                    ))}
                </div>
                <p className="text-xs mt-1 text-grey-500">Select a star to set rating parameter</p>
            </div>
            <div className='p-5' >
                <p className="text-[14px] mb-1">Write a review</p>
                <textarea
                className={`text-as font-medium resize-none w-full h-32 border-[1.5px] outline-none rounded-[4px] py-5 px-2 border-[#DADAE7]`}
                    />
            </div>
            <div className='px-5 py-5' >
                <button onClick={()=> {
                    close && close()
                    setModal && setModal(false)
                    document.body.style.overflow = 'auto';
                    }} className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full">
                    <p className="text-center">Write a review</p>
                    <Icon width={24} height={24} id="arrow-right-icon" />
            </button>
            </div>
        </div>
    </>
  )
}

export default WriteReview