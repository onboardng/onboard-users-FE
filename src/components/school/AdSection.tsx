import React from "react";
import Icon from "../Icons";

import AdCarousel from "../Shared/AdCarousel";

const AddSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white px-12 py-3">
      <AdCarousel />
      <div className="flex items-center md:items-start md:justify-center h-full">
        <div className="flex md:justify-center gap-5 md:h-full  my-5 flex-col justify-start items-start relative px-2.5 w-full">
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