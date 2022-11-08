import Icon from "../Icons";

const FileBox = ({
  isRounded,
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
  placeholder,
  value,
  error,
  touched,
  fullWidth,
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
  onChange?: any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  error?: string;
  touched?: boolean;
  keyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`${fullWidth && "w-full"}`}>
      {label && (
        <label className="text-[14px] leading-[22.4px] text-[#1B1B1B]">
          {label} <span className="text-[#DA0000]">{label2}</span>
        </label>
      )}
      <div className="flex gap-4 items-center justify-center relative md:justify-start w-full md:w-auto">
        <div
          className={`focus:outline-none w-full ${whole ? "xl:w-full" : "md:w-[408px]"} ${classname && classname} ${
            iconId ? "pl-[40px]" : "pl-[20px]"
          } pr-[20px] py-[17px] border-[1.5px] border-[#DADAE7] text-gray-400  ${isRounded && "rounded-[8px]"}`}
        >
          {value || placeholder}
        </div>
        {password && (
          <i onClick={togglePassword} className={`text-gray-100 absolute right-[15px] fa-solid fa-eye${showPassword ? "" : "-slash"}`}></i>
        )}
        <div className={`${iconId ? "block" : "hidden"} absolute left-[15px]`}>
          <Icon width={width} height={height} id={iconId} />
        </div>
        <div className={`${iconId2 ? "block" : "hidden"} absolute right-[15px]`}>
          <Icon width={width} height={height} id={iconId2} />
        </div>
      </div>
      {error && touched && <div className="text-[0.7812rem] text-red-600 text-left font-normal">{error}</div>}
    </div>
  );
};

export default FileBox;