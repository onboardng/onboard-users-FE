import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import { NewCourse } from '../../interfaces'
import Backdrop from './Backdrop'
import image from '../../assets/univ.jpg'

const Card:React.FC<NewCourse> = ({school_name, UniversityId, program_name, id, name}) => {
    const [largeView, setLargeView] = useState<boolean>(false)

  return (
    <>
    {largeView && (
        <Backdrop onClick={() => setLargeView(false)}>
            <img src={image} alt={school_name} className='w-2/3 object-contain' />
        </Backdrop>
    )}
    <div className='w-[400px] flex flex-col gap-[30px] bg-white'>
        <div className='w-full h-[259px] rounded-[6px] relative'>
            <img src={image} alt={school_name} className='w-[400px] h-[259px] rounded-[6px]' />
        </div>
        <div className='flex flex-col px-5'>
            <p className='w-11/12 font-[600] text-[28px] leading-[32px] capitalize'>
                {school_name.length > 20 ? `${school_name.substring(0,20)}...` : school_name}
            </p>
            <div className='flex flex-col mt-[14px] mb-[6px]'>
                <p className='font-medium capitalize'>{name}</p>
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