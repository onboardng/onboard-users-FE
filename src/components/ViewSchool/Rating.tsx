import React from 'react'
import Icon from '../Icons'

const Rating = ({rating, setRatingIndex}: {rating: number; setRatingIndex?: Function}) => {
  return (
    <>
      {[...new Array(5)].map((val, index)=>{
        return index < rating ? <span onClick={()=> setRatingIndex && setRatingIndex(index + 1)} className={`${setRatingIndex && "cursor-pointer"}`} ><Icon key={index} id='rating-full-icon' width={16} height={16} /></span> : <span onClick={()=> setRatingIndex && setRatingIndex(index + 1)} className={`${setRatingIndex && "cursor-pointer"}`} ><Icon id='rating-empty-icon' key={index} width={16} height={16} /></span>
      })}
    </>
  )
}

export default Rating