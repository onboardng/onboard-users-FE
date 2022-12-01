import React from 'react'

import Backdrop from './Backdrop'
import Button from './Button'

interface Props {
    onConfirm: () => void
    onClose: () => void
    heading: string
    message: string
}

const Modal:React.FC<Props> = ({onConfirm, onClose, heading, message}) => {
  return (
    <Backdrop onClick={() => onClose()}>
        <div className='w-[400px] min-w-[300px] bg-white flex flex-col rounded-[6px]'>
          <div className='w-full bg-primary px-1 rounded-t-[6px] p-[10px]'>
            <p className='font-medium text-white text-lg px-[6px]'>{heading}</p>
          </div>
          <div className='p-[20px]'>
            <p className='font-medium text-primary text-sm'>{message}</p>
            <div className='w-full flex items-center justify-between mt-[20px]'>
              <Button label='Confirm' type='button' onClick={onConfirm} priority='danger' width='130px' />
              <Button label='Cancel' type='button' onClick={onClose} priority='normal' width='130px' />
            </div>
          </div>
        </div>
    </Backdrop>
  )
}

export default Modal