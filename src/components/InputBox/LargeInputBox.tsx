import React, { ChangeEventHandler } from "react";
import Icon from "../Icons";

const LargeInputBox = ({ label, iconId, placeholder, handleChange, value, name, onBlur, onFocus }: { label: string; iconId: string; placeholder: string; handleChange?: ChangeEventHandler; value?: string, name?: string; onBlur?:ChangeEventHandler; onFocus?:ChangeEventHandler  }) => {
  return (
    <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl items-center px-2 md:px-8 py-6">
      <Icon width={24} height={24} id={iconId} />
      <div className="flex flex-col gap-3">
        <h2 className="text-[14px] md:text-[16px]">{label}</h2>
        <input name={name} value={value} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} type="text" placeholder={placeholder} className="text-[#1B1B1B] outline-none text-[16px] md:text-[20px] bg-transparent" />
      </div>
    </div>
  );
};

export default LargeInputBox;
