import React, { MouseEvent, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Props {
    images: Array<string>
}

const Carousel:React.FC<Props> = ({images}) => {
    const [current, setCurrent] = useState<number>(0)

    const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1)

    const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1)

  return (
    <div onClick={(e: MouseEvent) => e.stopPropagation()} className={`w-full flex items-center justify-center bg-gray-200 py-4 relative overflow-hidden`}>
        <button onClick={() => prev()} className='bg-primary text-white text-lg font-bold rounded-full p-2 absolute top-1/2 left-[5%] z-20 active:scale-90 transition-all duration-300 ease-in-out'>
            <FiChevronLeft />
        </button>
        <button onClick={() => next()} className='bg-primary text-white text-lg font-bold rounded-full p-2 absolute top-1/2 right-[5%] z-20 active:scale-90 transition-all duration-300 ease-in-out'>
            <FiChevronRight />
        </button>
        {images.map((image: string, index: number) => (
            <div key={index} className={`w-2/3 ${index === current ? '' : ''}`}>
                {index === current && <img src={image} alt='pic' className='w-full h-full object-cover' />}
            </div>
        ))}
    </div>
  )
}

export default Carousel