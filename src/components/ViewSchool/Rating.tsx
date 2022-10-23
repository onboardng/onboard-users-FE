import React from 'react'
import Icon from '../Icons'

const Rating = ({rating}: {rating: number}) => {
  return (
    <>
      {[...new Array(5)].map((val, index)=>{
        return index < rating ? <Icon key={index} id='rating-full-icon' width={16} height={16} /> : <Icon id='rating-empty-icon' key={index} width={16} height={16} />
      })}
    </>
  )
}

export default Rating