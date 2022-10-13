import React from "react";
import Icon from "../Icons";

const AddSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px] mx-4 md:mx-12 space-x-0 md:items-start items-center bg-white ">
      <img src={"/static/images/Ad.png"} alt="update" className="w-full h-auto" />
      <div className="flex md:items-center md:justify-center h-full">
        <div className="flex  md:justify-center gap-5 md:h-full  my-5 flex-col justify-start items-start relative px-2.5">
          <h2 className="text-[20px] md:text-[40px] font-semibold md:font-bold">This is an Ad</h2>
          <p className="text-[16px] md:text-[24px]">Sub text</p>
          <button className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto">
            <p className="text-center">Go now</p>
            <Icon width={24} height={24} id="arrow-right-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
