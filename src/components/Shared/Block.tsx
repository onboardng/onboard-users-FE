import React from 'react'

interface Props {
    icon: JSX.Element
    title: string
    text?: string | number
}

const Block = ({icon, title, text}:Props) => {
    return (
        <div className="w-full max-w-fit min-h-[78px] flex items-center gap-[22px] py-[10px] px-5 bg-[#F0F0F0] rounded-[10px]">
            <span className='w-fit'>{icon}</span>
            <div className="flex flex-col gap-[10px]">
                <p className="text-base text-[#8B8BA4] leading-[22px]">{title}</p>
                <p className="font-medium text-sm leading-[26px] capitalize">{text}</p>
            </div>
        </div>
    )
}

export default Block