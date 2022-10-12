import React from "react";

const Navbar = () => {
  return (
    <div className="mx-[57px]  relative md:pt-[17px] flex justify-between items-center ">
      <div className="hidden md:block">
        <img src="/svgs/Onboard Logo - White 1.svg" alt="logo" />
      </div>
      <div className=" gap-[27px] items-center hidden md:flex">
        <button className="border text-white border-white rounded-lg px-4 py-2">Sign In</button>
        <button className="bg-white rounded-lg text-primary px-4 py-2">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
