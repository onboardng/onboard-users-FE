import React from "react";
import Select from "react-select";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    height: "60px",
    border: "1px solid #DADAE7",
    padding: "5px",
    background: "transparent",
    transitionDuration: "300ms",
    transitionProperty: "box-shadow",
    transitionTimingFunction: "cubic-bezier(0.4,0,1,1)",
    "focus:": { background: "transparent" },
    boxShadow: "none",
  }),
  // valueContainer: (provided) => ({
  //   ...provided,
  //   paddingTop: '0.25rem',
  //   paddingBottom: '0.05rem',
  // }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#02003B",
    fontSize: "1rem",
  }),
  dropdownIndicator: (provided: any) => ({ ...provided, color: "#839AB0" }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided: any) => ({ ...provided, overflow: "unset" }),
  menu: (provided: any) => ({ ...provided, background: "#FFFFFF" }),
  option: (provided: any, state: any) => ({
    ...provided,
    //   ':active': { backgroundColor: "blue" },
    ":hover": { opacity: "0.5" },
    backgroundColor: "#FFFFFF",
    color: state.isSelected ? "inherit" : "inherit",
  }),
};

const InputSelect = ({
  options,
  handleChange,
  disabled,
  value,
  placeholder,
  name,
  loading,
}: {
  options: { label: string; value: string }[];
  handleChange: Function;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  name: string;
  loading?: boolean;
}) => {
  return (
    <div className="bg-[#DADAE7] rounded-[4px]">
      <Select
        styles={customStyles}
        id={name}
        options={options}
        defaultValue={value ? { label: value, value: value } : placeholder}
        name={name}
        placeholder={value ? "" : placeholder}
        onChange={(e) => handleChange(e)}
        isDisabled={disabled}
        isLoading={loading}
      />
    </div>
  );
};

export default InputSelect;
