import Icon from "../Icons";

const InputBox = ({
  placeholder,
  iconId,
  height,
  width,
  label,
  classname,
  label2,
  whole,
  password,
  togglePassword,
  showPassword,
}: {
  password?: boolean;
  togglePassword?: () => void;
  showPassword?: boolean;
  whole?: boolean;
  label2?: string;
  classname?: string;
  label?: string;
  placeholder: string;
  iconId?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <div>
      {label && (
        <label className="text-[14px] leading-[22.4px] text-[#1B1B1B]">
          {label} <span className="text-[#DA0000]">{label2}</span>
        </label>
      )}
      <div className="flex gap-4 items-center justify-center relative md:justify-start w-full md:w-auto">
        <input
          type={`${password ? (showPassword ? "text" : "password") : "text"}`}
          placeholder={placeholder}
          className={`focus:outline-none w-full ${whole ? "xl:w-full md:w-[408px]" : "md:w-[408px]"} ${classname && classname} ${
            iconId ? "pl-[40px]" : "pl-[20px]"
          } pr-[20px] py-[17px] border-[1.5px] border-[#DADAE7]`}
        />{" "}
        {password && <i onClick={togglePassword} className={`text-gray-500 absolute right-[15px] fa-solid fa-eye${showPassword ? "" : "-slash"}`}></i>}
        <div className={`${iconId ? "block" : "hidden"} absolute left-[15px]`}>
          <Icon width={width} height={height} id={iconId} />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
