import React, { ChangeEvent } from 'react'

interface Props {
    label: string
    type: string
    name?: string
    value?: any
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    width?: string | number
}

const InputField:React.FC<Props> = ({label, type, name, value, onChange, placeholder, width}) => {
    return (
        <div className='w-full flex flex-col'>    
            <label htmlFor={name}>{label}</label>
            <div style={{width: width}} className='w-full h-[44px] flex items-center bg-white border-[1px] border-[#DADAE7] focus-within:border-primary rounded-md px-2'>
                <input type={type} value={value} onChange={onChange} placeholder={placeholder} className='w-full h-full border-none outline-none px-[2px] rounded-md' />
            </div>
        </div>
    )
}

export default InputField