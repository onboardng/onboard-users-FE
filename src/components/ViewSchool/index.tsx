import React from 'react'

import { UniversityResponse } from '../../interfaces'

interface Props { data: UniversityResponse }

const ViewSchool:React.FC<Props> = ({data}) => {
  const { university, available_programmes } = data

  return (
    <div className='w-full flex flex-row'>
      <div className='w-1/2 flex flex-col items-center'>
        <div className='w-[574px]'>
          <img src={university.pictures[0]} alt={university.name} className='w-full h-full rounded-[]' />
        </div>
        <div>
          {university.pictures.map((pic, index) => (
            <img key={index} src={pic} alt={university.name} className='w-[98px] h-[98px] rounded-md' />
          ))}
        </div>
      </div>
      <div className='w-1/2 flex flex-col items-center'></div>
    </div>
  )
}

export default ViewSchool