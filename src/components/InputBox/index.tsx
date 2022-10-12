import React from 'react'
import Icon from '../Icons'

const InputBox = ({placeholder, iconId, height, width }: {placeholder: string, iconId?: string, height?: number, width?: number }) => {
  return (
    <div className="flex gap-4 items-center justify-center relative md:justify-start w-full md:w-auto">
        <input
            type="text"
            placeholder={placeholder}
            className=" focus:outline-none w-full md:w-[408px] pl-[40px] pr-[20px] py-[17px] border-[1.5px] border-[#DADAE7]"
        />{" "}
        <div className={`${iconId ? "block" : "hidden"} absolute left-[15px]`} >
            <Icon width={width} height={height} id={iconId} />
        </div>
    </div>
  )
}

export default InputBox