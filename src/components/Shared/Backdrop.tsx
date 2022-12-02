import React from 'react'

interface Props {
    children: React.ReactNode
    onClick: () => void
 }

const Backdrop:React.FC<Props> = ({children, onClick}) => {
  return (
    <div className='w-full h-full fixed top-0 left-0 grid place-items-center bg-[#F9F9F9] bg-opacity-60 modal' onClick={onClick}>
        {children}
    </div>
  )
}

export default Backdrop