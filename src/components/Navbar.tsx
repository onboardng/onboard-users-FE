import React from "react";

const Navbar = () => {
  return (
    <div className="mx-[57px] pt-[17px] flex justify-between items-center sticky">
      <div>
        <img src="/static/images/Logo.png" alt="logo" />
      </div>
      <div className="flex gap-[27px] items-center">
        <button className="border text-white border-white rounded-lg px-4 py-2">Sign In</button>
        <button className="bg-white rounded-lg text-primary px-4 py-2">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
