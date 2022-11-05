import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts';
import { useCreateReviewMutation } from '../../redux/services';
import Icon from '../Icons';
import Rating from './Rating';
import RatingLarge from './RatingLarge';

const WriteReview = ({close, setModal, id}: {close?: Function, setModal?: Function, id: string}) => {
    const [ ratingIndex, setRatingIndex ] = useState(0);
    const [ text, setText ] = useState("");
    const matches = useMediaQuery('(min-width: 768px)');
    const [createReview, { isLoading, isSuccess, reset }] = useCreateReviewMutation()
    useEffect(()=>{
        if(isSuccess){
            close && close()
            setModal && setModal(false)
            document.body.style.overflow = 'auto';
            reset()
        }
    },[close, isSuccess, setModal, reset])
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
                {/* {Array(5)
                    .fill("")
                    .map((_, index) => (
                    <Icon id="star-icon" width={18} height={17} key={index} />
                    ))} */}
                    {matches ? <RatingLarge setRatingIndex={setRatingIndex} rating={ratingIndex} /> : <Rating setRatingIndex={setRatingIndex} rating={ratingIndex} />}
                </div>
                <p className="text-xs mt-1 text-grey-500">Select a star to set rating parameter</p>
            </div>
            <div className='p-5' >
                <p className="text-[14px] mb-1">Write a review</p>
                <textarea value={text} onChange={(e)=> setText(e.target.value)}
                className={`text-as font-medium resize-none w-full h-32 border-[1.5px] outline-none rounded-[4px] py-5 px-2 border-[#DADAE7]`}
                    />
            </div>
            <div className='px-5 py-5' >
                <button disabled={isLoading} onClick={()=> {
                    createReview({id, body: {rating: ratingIndex, text: text}})
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