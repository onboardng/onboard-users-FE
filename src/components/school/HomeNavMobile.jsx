import React from "react";
import Icon from "../Icons";

export const navItem = ["SignIn", "Sign Up"];

const NavMobile = ({ toggleMenu, setToggleMenu, initial }) => {
  return (
    <ul
      className={`z-[100] mx-auto fixed w-[100vw] top-0  md:w-[300px] bg-white lg:hidden  left-0 p-3 h-screen shadow-2xl list-none flex flex-col justify-start text-white ${
        toggleMenu === "open" ? "animate-slide-in" : toggleMenu === "close" && initial ? "animate-slide-out" : "hidden -w-[100vw]"
      }`}
    >
      <div
        onClick={() => {
          setToggleMenu("close");
        }}
        className="md:hidden w-fit ml-[21px] cursor-pointer mt-[55px]"
      >
        {toggleMenu === "open" && <Icon width={14} height={14} id="close-icon" />}
      </div>
      <div className="mt-24">
        <div>
          <div
            className={`flex items-center mx-auto text-green text-lg mb-[36px] font-semibold px-5 cursor-pointer py-3 border-green border rounded-lg `}
            onClick={() => {
              setToggleMenu("close");
            }}
          >
            <button className="w-[300px]  mx-auto min-h-[50px] bg-orange trans rounded-full">Sign In</button>{" "}
          </div>
        </div>
        <div>
          <div
            className={`flex items-center mx-auto text-white text-lg mb-[36px] font-semibold px-5 cursor-pointer py-3 bg-green rounded-lg `}
            onClick={() => {
              setToggleMenu("close");
            }}
          >
            <button className="w-[300px]  mx-auto min-h-[50px] bg-orange trans rounded-full text-white">Sign Up</button>{" "}
          </div>
        </div>
      </div>
    </ul>
  );
};

export default NavMobile;
