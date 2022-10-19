import React, { ReactNode } from 'react'

interface Iprops {
    children: unknown;
    setModal: Function
  }

const Modal2 = ({ children, setModal, ...rest }: Iprops) => {
  return (
    <div className='fixed w-screen bg-modal2 h-screen md:hidden bottom-[0] z-[50] overflow-hidden' >
        <div className='h-[45%] overflow-hidden' ></div>
        <div className='h-[55%] ' >
            {children as ReactNode}
        </div>
    </div>
  )
}

export default Modal2