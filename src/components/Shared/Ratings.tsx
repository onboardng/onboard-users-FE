import React, { useState } from 'react'
import { FiStar } from 'react-icons/fi'

interface Props {
  ratings: number | undefined
  size?: 'large' | 'normal'
  disabled?: boolean
}

const Ratings:React.FC<Props> = ({ratings, disabled, size}) => {
  const [rating, setRating] = useState<number | undefined>(0 || ratings)
  const [hovering, setHovering] = useState<boolean>(false)
  
  if(!rating || rating === undefined) {
    return (
      <div className='flex items-center gap-1'>
          {[...Array(5)].map((item, index: number) => (
              <label key={index} onClick={() => setRating(index+1)} className={`${size === 'large' ? 'w-5 h-5' : 'w-[15px] h-[15px]'} relative cursor-pointer`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                  <input type="radio" disabled={disabled} className='w-full h-full absolute top-0 left-0 star-input' />
                  <FiStar className={`text-amber-500 h-full w-full fill-transparent`} />
              </label>
          ))}
      </div>
    )
  }

  return (
    <div className='flex items-center gap-1'>
        {[...Array(5)].map((item, index: number) => (
            <label key={index} onClick={() => setRating(index+1)} className={`${size === 'large' ? 'w-5 h-5' : 'w-[15px] h-[15px]'} relative cursor-pointer`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                <input type="radio" disabled={disabled} className='w-full h-full absolute top-0 left-0 star-input' />
                <FiStar className={`text-amber-500 h-full w-full ${size === 'large' ? '' : ''} ${(index < (hovering || rating)) ? 'fill-amber-500' : 'fill-transparent'}`} />
            </label>
        ))}
    </div>
  )
}

export default Ratings