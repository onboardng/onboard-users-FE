import React from "react";
import Icon from "../Icons";

const InputBox = ({
  isRounded,
  placeholder,
  iconId,
  iconId2,
  height,
  width,
  label,
  classname,
  label2,
  whole,
  password,
  togglePassword,
  showPassword,
  onChange,
  onBlur,
  value,
  name,
  error,
  touched,
  fullWidth,
  keyDown,
  isError,
  defaultValue,
  icon
}: {
  fullWidth?: boolean;
  isRounded?: boolean;
  password?: boolean;
  togglePassword?: () => void;
  showPassword?: boolean;
  whole?: boolean;
  label2?: string;
  classname?: string;
  label?: string;
  placeholder: string;
  iconId?: string;
  iconId2?: string;
  height?: number;
  width?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  error?: string;
  touched?: boolean;
  keyDown?: (event: React.KeyboardEvent<HTMLInputElement>)=> void
  isError?: boolean;
  defaultValue?: string
  icon?: any
}) => {
  return (
    <div className={`${fullWidth && "w-full"}`}>
      {label && (
        <label className="text-[14px] leading-[22.4px] text-[#1B1B1B]">
          {label} <span className="text-[#DA0000]">{label2}</span>
        </label>
      )}
      <div className={`flex gap-4 items-center ${classname && classname} justify-center relative md:justify-start w-full md:w-auto border-2 focus-within:border-primary rounded-[8px] border-[#DADAE7] pl-[15px]`}>
        {icon && icon}
        <div className={`${iconId ? "block" : "hidden"}`}>
          <Icon width={width} height={height} id={iconId} />
        </div>
        <div className={`${iconId2 ? "block" : "hidden"} `}>
          <Icon width={width} height={height} id={iconId2} />
        </div>
        <input
          type={`${password ? (showPassword ? "text" : "password") : "text"}`}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          onKeyDown={keyDown}
          value={value}
          defaultValue={defaultValue || ""}
          placeholder={placeholder}
          className={`focus:outline-none bg-transparent border-none w-full rounded-[8px] ${whole ? "xl:w-full" : "md:w-full"} py-[17px] border-[1.5px] ${isError ? "border-[#DA0000]" : "border-[#DADAE7]"} ${isRounded && "rounded-[8px]"}`}
        />{" "}
        {password && (
          <i onClick={togglePassword} className={`text-gray-500 absolute right-[15px] fa-solid fa-eye${showPassword ? "" : "-slash"}`}></i>
        )}
      </div>
      {error && touched && <div className="text-[0.7812rem] text-red-600 text-left font-normal">{error}</div>}
    </div>
  );
};

export default InputBox;
