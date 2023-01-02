import React from 'react'

interface Props {
    children: React.ReactNode
    onClick: () => void
 }

const Backdrop:React.FC<Props> = ({children, onClick}) => {
  return (
    <div className='w-full h-full fixed top-0 left-0 grid place-items-center bg-[#aa9e9e] bg-opacity-60 transition-all ease-in-out duration-700 modal' onClick={onClick}>
        {children}
    </div>
  )
}

export default Backdrop