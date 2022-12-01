import React, { useState } from 'react'
import { FiStar } from 'react-icons/fi'

interface Props {
    rating: number
}

const CustomRating:React.FC<Props> = () => {
    const [rate, setRate] = useState<number>(0)

    const array: Array<number> = [1, 2, 3, 4, 5]

  return (
    <div className='flex items-center gap-1 text-lg my-2'>
        {array.map((item, index) => (
            <label key={index} className='cursor-pointer'>
                <input type="radio" value={index+1} onClick={() => setRate(index+1)} className='hidden' />
                <FiStar className={`${index + 1 < rate || index + 1 === rate ? 'fill-amber-400 text-transparent' : 'fill-none text-black'}`} />
            </label>
        ))}
    </div>
  )
}

export default CustomRating