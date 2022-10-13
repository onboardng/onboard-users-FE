import React from "react";
import Icon from "../Icons";

const Explore = () => {
  return (
    <div className="bg-white mt-[50px] mx-4 md:mx-12">
      <div className=" w-full p-[20px] md:p-[50px] text-center flex flex-col justify-center items-center">
        <h4 className="text-[20px] md:text-[28px]  font-medium md:leading-[39px]">Top schools around the world.</h4>
        <p className="text-[16px] md:text-[20px] md:leading-[32px] mt-2.5 mb-12">Explore with us.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {Array(5)
            .fill("")
            ?.map((_, index) => (
              <div className="flex flex-col justify-center items-center gap-5 relative" key={index}>
                <div className="flex gap-4 justify-center items-center bg-filter bg-no-repeat bg-cover bg-blend-multiply w-full md:w-[300px] md:h-[200px] relative  ">
                  <img src="/static/images/school.png" alt="card" className="w-full opacity-50" />
                  <h5 className="text-[16px] md:text-[24px] absolute text-white left-3 bottom-[30px]">University of Lagos</h5>
                  <div className="absolute flex text-white gap-2 items-center bottom-[15px] left-3">
                    <Icon width={12} height={14} id="location-icon-white" />
                    <p className="text-[10px]">Lagos, Nigeria</p>{" "}
                  </div>
                </div>
                <button className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center w-full md:px-[74.5px] py-[17px]">
                  <p className="text-center">View School Profile</p>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
