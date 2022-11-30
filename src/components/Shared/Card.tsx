import React from 'react'
import { Link } from 'react-router-dom'
import { FiCamera, FiChevronRight, FiMapPin } from 'react-icons/fi'

import { CardProps } from '../../interfaces'
import image from '../../assets/test-images.jpg'

const Card:React.FC<CardProps> = ({id, school_name, country}) => {
  return (
    <div className='w-[496.5px] flex flex-col gap-[30px] bg-white'>
        <div className='w-[487px] h-[259px] rounded-[6px] relative'>
            <Link to='/' className='w-[71px] h-[46px] flex items-center gap-[10px] px-[10px] bg-primary text-white absolute right-5 top-2 rounded-md'>
                <FiCamera />
            </Link>
            <img src={image} alt={school_name} className='w-full h-full rounded-[6px]' />
        </div>
        <div className='flex flex-col px-5'>
            <p className='font-[600] text-[28px] leading-[39px] capitalize'>{school_name}</p>
            <div className='flex flex-col mt-[14px] mb-[10px]'>
                <p>Ratings here</p>
            </div>
            <div className='flex items-center gap-[13px]'>
                <FiMapPin className='text-primary fill-primary' />
                <p className='font-[500] text-sm leading-[26px]'>{country}</p>
            </div>
            <Link to={`/schools/${id}`} className='w-[456.6px] h-[60px] flex items-center justify-center bg-primary text-white font-[500] text-sm rounded capitalize gap-[17px] mt-10 mb-[30px]'>
                view school
                <FiChevronRight className='text-white' />
            </Link>
        </div>
    </div>
  )
}

export default Card