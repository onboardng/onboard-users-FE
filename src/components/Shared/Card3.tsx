import React from 'react'
import { FiChevronRight} from 'react-icons/fi'

import { Course } from '../../interfaces'

type PopupProps = {
    open: boolean,
    course: Course | null,
    courseId: string | undefined
}

interface Props {
    course: Course
    setOpenPopup: PopupProps
}

const Card3 = ({course, setOpenPopup}:Props) => {
  return (
    <div className='w-full flex flex-col p-[20px] bg-white rounded-[10px]'>
        <div className='w-full flex items-center justify-between'>
            <div className='flex flex-col w-[60%]'>
            <p className='font-[500] text-lg leading-8 capitalize mb-[5px]'>{course?.name}</p>
            <p className='font-[500] text-sm leading-[26px] text-[#8B8BA4]'>
                Application closes on {course?.application_closing && new Date(course?.application_closing).toDateString()}
            </p>
            </div>
            <button onClick={() => {}} className='w-[158px] h-[60px] flex items-center justify-center gap-2 bg-primary text-white rounded-[4px] capitalize'>
            apply now
            <FiChevronRight />
            </button>
        </div>
        <hr className='w-full h-[1px] bg-[#DADAE7] mt-3 mb-5' />
        <div className='w-full'>
            <p className='first-letter:capitalize font-medium text-base leading-[22px] text-[#8B8BA4]'>{course?.description}</p>
        </div>
    </div>
  )
}

export default Card3