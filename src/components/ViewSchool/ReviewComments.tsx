import React from 'react'
import Rating from './Rating'
import carouselImage from '../../assets/Image Card.svg'

const ReviewComments = ({comments}: {comments: string[]}) => {
  return (
    <div className='px-5 py-3' >
        <div className='flex w-full' >
            <img src={carouselImage} alt="avatar" className='rounded-full w-12 h-12 object-cover' />
            <div className='w-full' >
                <div className='flex justify-between' >
                    <div className='pl-5' >
                        <p className='text-[#1B1B1B] text-[14px] leading-[22.4px]' >John Doe</p>
                        <span className='flex' >
                            {comments.map(comment => <Rating key={comment}  />)}
                        </span>
                    </div>
                    <p className='pr-5 text-[#8B8BA4] text-[14px] leading-[22.4px]' >Jan 1, 2020</p>
                </div>
                <p className='px-5 py-2 text-[#1B1B1B] text-[14px] leading-[22.4px]' >The hotel has a really nice ambience and architecture. But they need to work more on their staffs’ hospitality skills</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewComments