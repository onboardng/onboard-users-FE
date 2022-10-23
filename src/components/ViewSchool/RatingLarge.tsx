import React from 'react'
import Icon from '../Icons'

const RatingLarge = ({rating}: {rating: number}) => {
  return (
    <>
      {[...new Array(5)].map((ratingArr, index)=>{
      return index < rating ? <Icon key={index} id='big-rating-full-icon' width={24} height={24} /> : <Icon key={index} id='big-rating-empty-icon' width={24} height={24} />
      })}
    </>
  )
}

export default RatingLarge