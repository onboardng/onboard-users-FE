import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCamera, FiChevronRight, FiMapPin } from 'react-icons/fi'

import { CardProps } from '../../interfaces'
import Backdrop from './Backdrop'
import image from '../../assets/univ.jpg'

const Card:React.FC<CardProps> = ({id, school_name, country, UniversityId, width}) => {
    const [largeView, setLargeView] = useState<boolean>(false)

  return (
    <>
    {largeView && (
        <Backdrop onClick={() => setLargeView(false)}>
            <img src={image} alt={school_name} className='w-2/3 object-contain' />
        </Backdrop>
    )}
    <div className={`${width ? width : 'w-[400px]'} flex flex-col gap-[30px] bg-white`}>
        <div className='w-full h-[259px] rounded-[6px] relative'>
            <button onClick={() => setLargeView(true)} className='w-[71px] h-[46px] flex items-center gap-[10px] px-[10px] bg-primary text-white absolute right-5 top-2 rounded-md'>
                <FiCamera />
            </button>
            <img src={image} alt={school_name} className='w-[400px] h-[259px] rounded-[6px]' />
        </div>
        <div className='flex flex-col px-5'>
            <p className='w-11/12 font-[600] text-[28px] leading-[32px] capitalize'>
                {school_name.length > 20 ? `${school_name.substring(0,20)}...` : school_name}
            </p>
            <div className='flex flex-col mt-[14px] mb-[6px]'>
                <p>Ratings here</p>
            </div>
            <div className='flex items-center gap-[13px]'>
                <FiMapPin className='text-primary fill-primary' />
                <p className='font-[500] text-sm leading-[22px]'>{country}</p>
            </div>
            <Link to={`/schools/${UniversityId}`} className='w-[360px] h-[60px] flex items-center justify-center bg-primary text-white font-[500] text-sm rounded capitalize gap-[17px] mt-7 mb-[20px]'>
                view school
                <FiChevronRight className='text-white' />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Card