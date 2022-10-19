import React, { ReactNode } from 'react'

interface Iprops {
    children: unknown;
    setModal: Function
  }

const PageModal = ({ children, setModal, ...rest }: Iprops) => {
  return (
    <div className='fixed w-screen h-screen bg-white md:hidden top-[0] z-[50] overflow-hidden' >
        <div className='h-full' >
            {children as ReactNode}
        </div>
    </div>
  )
}

export default PageModal