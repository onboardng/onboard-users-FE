import React, { Dispatch, SetStateAction } from 'react'
import { FiStar } from 'react-icons/fi'

interface Props {
    rating: number
    setRating: Dispatch<SetStateAction<number>>
}

const CustomRating:React.FC<Props> = ({rating, setRating}) => {
    const array: Array<number> = [1, 2, 3, 4, 5]

  return (
    <div className='flex items-center gap-1 text-lg my-2'>
        {array.map((item, index) => (
            <label key={index} className='cursor-pointer'>
                <input type="radio" value={index+1} onClick={() => setRating(index+1)} className='hidden' />
                <FiStar className={`${index + 1 < rating || index + 1 === rating ? 'fill-amber-400 text-transparent' : 'fill-none text-black'}`} />
            </label>
        ))}
    </div>
  )
}

export default CustomRating