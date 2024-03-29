import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { HiCamera, HiMapPin } from 'react-icons/hi2'

import { School } from '../../interfaces'
import Backdrop from './Backdrop'
import image from '../../assets/univ.jpg'
import Ratings from './Ratings'
import Carousel from './Carousel'

const Card:React.FC<School> = ({country, created_at, description, id, name, pictures, ratings, updated_at}) => {
    const [largeView, setLargeView] = useState<boolean>(false)
    const [rating, setRating] = useState<number>(0 || ratings)

  return (
    <>
    {largeView && (
        <Backdrop onClick={() => setLargeView(false)}>
            {pictures && (<Carousel images={pictures} />)}
            {/* // <img src={`${pictures ? pictures[0] : image}`} alt={name} className='w-2/3 object-contain' /> */}
        </Backdrop>
    )}
    <div className='w-[420px] max-w-[90%] flex flex-col gap-[30px] bg-white'>
        <div className='w-full h-[259px] rounded-[6px] relative'>
            <button onClick={() => setLargeView(true)} className='w-[65px] h-[40px] flex items-center justify-center gap-[10px] px-[10px] bg-primary text-white absolute right-5 top-2 rounded-md'>
                <HiCamera className='text-sm fill-white text-primary' />
                <p className='font-bold text-sm leading-[26px]'>{pictures && pictures.length}</p>
            </button>
            <img src={`${pictures ? pictures[0] : image}`} alt={name} className='w-[420px] h-[259px] rounded-[6px]' />
        </div>
        <div className='flex flex-col px-5'>
            <p className='w-11/12 font-[600] text-[18px] md:text-[28px] leading-[32px] capitalize'>
                {name.length > 20 ? `${name.substring(0,20)}...` : name}
            </p>
            <div className='flex flex-col mt-[14px] mb-[6px]'>
                <Ratings ratings={ratings} disabled setRatings={setRating} />
            </div>
            <div className='flex items-center gap-[13px]'>
                <HiMapPin className='text-primary' />
                <p className='font-[500] text-[12px] md:text-sm leading-[22px]'>{country}</p>
            </div>
            <Link to={`/schools/${id}`} className='w-[360px] max-w-full h-[60px] flex items-center justify-center bg-primary text-white font-[500] text-sm rounded capitalize gap-[17px] mt-7 mb-[20px]'>
                view school
                <FiChevronRight className='text-white' />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Card