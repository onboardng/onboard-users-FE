import React from 'react'
import Select from 'react-select';

const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      height: "46px",
      border: "1px solid #E4EAF0",
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
    placeholder: (provided:any) => ({
      ...provided,
      color: "#02003B",
      fontSize: '1rem',
    }),
    dropdownIndicator: (provided:any) => ({ ...provided, color: "#839AB0" }),
    indicatorSeparator: (provided:any) => ({
      ...provided,
      display: "none"
    }),
    singleValue: (provided:any) => ({ ...provided, overflow: "unset" }),
    menu: (provided:any) => ({ ...provided, background: "#FFFFFF" }),
    option: (provided:any, state:any) => ({
      ...provided,
      //   ':active': { backgroundColor: "blue" },
      ":hover": { opacity: "0.5" },
      backgroundColor: "#FFFFFF",
      color: state.isSelected ? "inherit" : "inherit",
    }),
  };

const InputSelect = () => {
  return (
    <div>
        <Select
        styles={customStyles}
        />
    </div>
  )
}

export default InputSelect