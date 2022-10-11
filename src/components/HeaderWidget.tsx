import React, { Dispatch, SetStateAction } from "react";
import Airplane from "../Icons/Airplane";
import Hotel from "../Icons/Hotel";
import VisaCard from "../Icons/VisaCard";

const HeaderWidget = ({ index, setIndex }: { index: number; setIndex: Dispatch<SetStateAction<number>> }) => {
  return (
    <div className="absolute  bottom-[42px] w-full">
      <div className="flex gap-2.5 ml-[100px]">
        <div
          onClick={() => setIndex(0)}
          className={`flex  items-center gap-3 cursor-pointer text-[20px] py-[10px] px-[15px] md:leading-[160%] select-none rounded-t-xl text-center ${
            index === 0 ? "bg-white font-bold text-black" : "bg-[#8B8BA4] text-[#DCDCFF]"
          }`}
        >
          <Hotel fill={`${index === 0 ? "#1B1B1B" : "#DCDCFF"}`} /> Hotels
        </div>
        <div
          onClick={() => setIndex(1)}
          className={`flex  items-center gap-3 cursor-pointer text-[20px] py-[10px] px-[15px] md:leading-[160%] select-none rounded-t-xl text-center ${
            index === 1 ? "bg-white font-bold text-black" : "bg-[#8B8BA4] text-[#DCDCFF]"
          }`}
        >
          <Airplane fill={`${index === 1 ? "#1B1B1B" : "#DCDCFF"}`} /> Flights
        </div>
        <div
          onClick={() => setIndex(2)}
          className={`flex  items-center gap-3 cursor-pointer text-[20px] py-[10px] px-[15px] md:leading-[160%] select-none rounded-t-xl text-center ${
            index === 2 ? "bg-white font-bold text-black" : "bg-[#8B8BA4] text-[#DCDCFF]"
          }`}
        >
          <VisaCard fill={`${index === 2 ? "#1B1B1B" : "#DCDCFF"}`} /> Visa
        </div>
      </div>
      <div className="bg-white rounded-xl px-[57px] py-[50px] flex gap-10 mx-12">
        <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl items-center px-8 py-6">
          <img src="/static/svgs/Bed.svg" alt="" className="w-[19.5px] h-[13.5px]" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px]">Hotels in</h2>
            <input type="text" placeholder="Enter City or hotel name" className="text-[#1B1B1B] outline-none text-[20px] bg-transparent" />
          </div>
        </div>
        <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl items-center px-8 py-6">
          <img src="/static/svgs/ManIcon.svg" alt="" className="h-[19.5px] w-[15px]" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px]">Rooms and Guests</h2>
            <input type="text" placeholder="1 Room, 1 Guest" className="text-[#1B1B1B] outline-none text-[20px] bg-transparent" />
          </div>
        </div>
        <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl items-center px-8 py-6">
          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              <img src="/static/svgs/Calendar.svg" alt="" className="w-[18.5px] h-[18.5px]" />
              <div className="flex flex-col gap-3">
                <h2 className="text-[16px]">Rooms and Guests</h2>
                <input type="text" placeholder="1 Room, 1 Guest" className="text-[#1B1B1B] outline-none text-[20px] bg-transparent" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/static/svgs/Calendar.svg" alt="" className="w-[18.5px] h-[18.5px]" />
              <div className="flex flex-col gap-3">
                <h2 className="text-[16px]">Rooms and Guests</h2>
                <input type="text" placeholder="1 Room, 1 Guest" className="text-[#1B1B1B] outline-none text-[20px] bg-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green text-white flex gap-4 rounded-lg items-center px-[30px] py-[37px]">
          <p>Search</p>
          <img src="/static/svgs/ArrowRight.svg" alt="" className="w-[9px] h-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
