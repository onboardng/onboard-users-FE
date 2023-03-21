import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { FiStar } from 'react-icons/fi';
// import { toast } from 'react-toastify';

// import { RootState } from '../../redux/store';
// import { useHttpRequest } from '../../hooks';

interface Props {
  ratings: number | undefined
  setRatings: Dispatch<SetStateAction<number>>
  size?: 'large' | 'normal'
  disabled?: boolean
};

// const url = process.env.REACT_APP_BACKEND_API

const Ratings:React.FC<Props> = ({ratings, disabled, size, setRatings}) => {
  // const {authorization:{access_token}, user} = useSelector((store:RootState) => store.authStore)
  const [hovering, setHovering] = useState<boolean>(false);
  // const {error, sendRequest} = useHttpRequest()

  // const sendRatings = async(rating?: number) => {
  //   if(!user) return toast.error("Please login to rate a school")
  //   try {
  //     const data = await sendRequest(`${url}/`, "POST", null, {
  //       Authorization: `Bearer ${access_token}`
  //     })
  //     if(!data || data === undefined) return
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   sendRatings(ratings)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[ratings])

  // useEffect(() => {
  //   error && toast.error(`${error}`)
  // },[error])
  
  if(!ratings || ratings === undefined) {
    return (
      <div className='flex items-center gap-1'>
          {[...Array(5)].map((item, index: number) => (
              <label key={index} onClick={() => setRatings(index+1)} className={`${size === 'large' ? 'w-5 h-5' : 'w-[15px] h-[15px]'} relative cursor-pointer`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
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
            <label key={index} onClick={() => setRatings(index+1)} className={`${size === 'large' ? 'w-5 h-5' : 'w-[15px] h-[15px]'} relative cursor-pointer`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                <input type="radio" disabled={disabled} className='w-full h-full absolute top-0 left-0 star-input' />
                <FiStar className={`text-amber-500 h-full w-full ${size === 'large' ? '' : ''} ${(index < (hovering || ratings)) ? 'fill-amber-500' : 'fill-transparent'}`} />
            </label>
        ))}
    </div>
  )
}

export default Ratings