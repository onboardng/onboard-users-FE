import React from 'react'

import Backdrop from './Backdrop'
import Button from './Button'
import AlertTriangle from '../../Icons/AlertTriangle'

interface Props {
    onConfirm: () => void
    onClose: () => void
    heading: string
    message: string
}

const Modal:React.FC<Props> = ({onConfirm, onClose, heading, message}) => {
  return (
    <Backdrop onClick={() => onClose()}>
        <div className='w-[550px] min-w-[300px] bg-white flex flex-col rounded-[6px]'>
          <div className='w-full h-[62px] flex items-center bg-[#FFE1E1] px-1 rounded-t-[6px] p-[10px]'>
            <p className='font-medium text-black text-sm leading-[22px] px-[6px]'>{heading}</p>
          </div>
          <div className='w-full h-[411px] grid place-items-center p-[20px]'>
            <AlertTriangle />
            <p className='font-medium text-black text-sm leading-[22px]'>{message}</p>
            <div className='w-[90%] flex items-center justify-between mt-[20px]'>
              <Button label='Cancel' type='button' onClick={onClose} priority='normal' width='130px' />
              <Button label='Sign Out' type='button' onClick={onConfirm} priority='danger' width='130px' />
            </div>
          </div>
        </div>
    </Backdrop>
  )
}

export default Modal