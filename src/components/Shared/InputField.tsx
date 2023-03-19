import React, { ChangeEvent } from 'react'

interface Props {
    label: string
    type: string
    name?: string
    value?: any
    defaultValue?: any
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    width?: string | number
    icon?: React.ReactNode
}

const InputField:React.FC<Props> = ({label, type, name, value, defaultValue, onChange, placeholder, width, icon}) => {
    return (
        <div className='w-full flex flex-col'>    
            <label htmlFor={name}>{label}</label>
            <div style={{width: width}} className='w-full h-[44px] flex items-center gap-3 bg-white border-[1px] border-[#DADAE7] focus-within:border-primary rounded-md px-2'>
                {icon}
                <input type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} className='w-full h-full border-none outline-none px-[2px] rounded-md' />
            </div>
        </div>
    )
}

export default InputField