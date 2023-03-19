import { Link } from 'react-router-dom'
import React from 'react'

const Apply = () => {
  return (
    <div className="w-full h-[250px] md:h-[450px] grid place-items-center bg-apply bg-cover bg-center">
      <div className='w-full h-full grid place-items-center bg-black/50'>
        <div className="flex flex-col items-center text-center">
          <p className="text-[16px] md:text-[28px] text-white font-semibold">Get feedback on the best school for your course</p>
          <p className="text-[14px] md:text-[20px] text-white font-medium">Just select the courses, we&apos;ll tell you the best school</p>
          <Link to="/apply" className="py-4 px-20 my-10 bg-primary text-white flex items-center rounded-[4px]">
              Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Apply