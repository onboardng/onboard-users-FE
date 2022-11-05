import React from 'react'
import Select from 'react-select';

const LargeSelectBox = ({ placeholder, options, handleChange, disabled, value, name, loading, matches  }: { placeholder: string, options: {label: string; value: string}[]; handleChange: Function; disabled?: boolean; value?: string; name: string; loading?: boolean; matches?: boolean }) => {
    const customStyles = {
        control: (provided: any, state: any) => ({
          ...provided,
          height: "100%",
          border: "none",
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
          color: "#8B8BA4",
          fontSize: matches ? "20px":'16px',
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
  return (
    <>
        <Select
            styles={customStyles}
            id={name}
            options={options}
            defaultValue={
              value
                ? { label: value, value: value }
                : placeholder
            }
            name={name}
            placeholder={value ? "" : placeholder}
            onChange={(val)=>handleChange(val)}
            isDisabled={disabled}
            isLoading={loading}
        />
    </>
  )
}

export default LargeSelectBox