import React from 'react'

interface Props {
    label: string
    type: 'button' | 'submit' | 'reset'
    onClick?: () => void
    width?: number | string
    priority?: 'normal' | 'success' | 'danger'
}

const Button:React.FC<Props> = ({label, type, onClick, width, priority}) => {
    if(priority === 'success') {
        return (
            <button type={type} onClick={onClick} style={{width: width}} className='w-full bg-emerald-600 text-white font-medium text-sm cursor-pointer rounded-[6px] py-2 px-4'>
                {label}
            </button>
        )
    }

    if(priority === 'danger') {
        return (
            <button type={type} onClick={onClick} style={{width: width}} className='w-full bg-red-500 text-white font-medium text-sm cursor-pointer rounded-[6px] py-2 px-4'>
                {label}
            </button>
        )
    }

  return (
    <button type={type} onClick={onClick} style={{width: width}} className='w-full bg-primary text-white font-medium text-sm cursor-pointer rounded-[6px] py-2 px-4'>
        {label}
    </button>
  )
}

export default Button