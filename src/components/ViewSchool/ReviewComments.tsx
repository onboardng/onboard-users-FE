import React from 'react'
import Rating from './Rating'
import carouselImage from '../../assets/Image Card.svg';
import dayjs from 'dayjs'

const ReviewComments = ({comments}: {comments: any}) => {
  return (
    <div className='px-5 py-3' >
        <div className='flex w-full' >
            <img src={carouselImage} alt="avatar" className='rounded-full w-12 h-12 object-cover' />
            <div className='w-full' >
                <div className='flex justify-between' >
                    <div className='pl-5' >
                        <p className='text-[#1B1B1B] text-[14px] leading-[22.4px]' >John Doe</p>
                        <span className='flex' >
                            <Rating rating={comments?.rating}  />
                        </span>
                    </div>
                    <p className='pr-5 text-[#8B8BA4] text-[14px] leading-[22.4px]' >{dayjs(comments?.created_at).format('MMM DD, YYYY')}</p>
                </div>
                <p className='px-5 py-2 text-[#1B1B1B] text-[14px] leading-[22.4px]' >{comments?.text}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewComments