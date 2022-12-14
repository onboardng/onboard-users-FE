import React, { useEffect, useState } from 'react'

import { CAROUSEL_DATA } from '../../CAROUSEL_DATA'

const AdCarousel = () => {
    const [current, setCurrent] = useState<number>(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % CAROUSEL_DATA.length )
        }, 5000)
        return () => clearInterval(interval)
    },[current])

  return (
    <div className='w-full md:w-[700px] overflow-hidden' >
        {CAROUSEL_DATA.map((image, index) => (
            <div key={index} className={`w-full ${index === current ? 'block' : 'hidden'}`}>
                {index === current && <img src={image.image} alt={image.name} className='w-full animate-slide-in transition-all ease-in-out' />}
            </div>
        ))}
    </div>
  )
}

export default AdCarousel