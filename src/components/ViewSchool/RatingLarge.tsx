import React from 'react'
import Icon from '../Icons'

const RatingLarge = ({rating, setRatingIndex}: {rating: number; setRatingIndex?: Function}) => {
  return (
    <>
      {[...new Array(5)].map((ratingArr, index)=>{
      return index < rating ? <span key={index} onClick={()=> setRatingIndex && setRatingIndex(index + 1)} className={`${setRatingIndex && "cursor-pointer"}`} ><Icon id='big-rating-full-icon' width={24} height={24} /></span> :<span key={index} onClick={()=> setRatingIndex && setRatingIndex(index + 1)} className={`${setRatingIndex && "cursor-pointer"}`} ><Icon id='big-rating-empty-icon' width={24} height={24} /></span>
      })}
    </>
  )
}

export default RatingLarge