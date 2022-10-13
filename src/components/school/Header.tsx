import React, { Dispatch, SetStateAction, useState } from "react";
import { useTransition, animated } from "react-spring";
import Icon from "../Icons";
import Navbar from "../Navbar";
import HeaderWidget from "./HeaderWidget";

const slides = ["/static/images/SchoolImage1.png", "/static/images/SchoolImage3.png", "/static/images/SchoolImage2.png"];

const Header = ({ toggleMenu, setToggleMenu }: { toggleMenu: string; setToggleMenu: Dispatch<SetStateAction<string>> }) => {
  const [bgIndex, setBgIndex] = useState(0);
  const transitions = useTransition(bgIndex, {
    key: bgIndex,
    from: { opacity: 1, backgroundColor: "rgba(0,0,0,0.7)" },
    enter: { opacity: 0.9, transform: "translate3d(0px,0,0) scale(1.6) rotateX(0deg)" },
    leave: { opacity: 0.99, transform: "translate3d(0px,0,0) scale(1.9) rotateX(0deg)", backgroundColor: "rgba(0,0,0,0.99)" },
    config: {
      duration: 3000,
      easing: (t) => t * (2 - t),
    },
    onRest: (_a, _b, item) => {
      if (bgIndex === item) {
        setBgIndex((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });

  const toggleNav = () => {
    toggleMenu === "open" ? setToggleMenu("close") : setToggleMenu("open");
  };

  return (
    <div className="relative">
      <div className="md:hidden z-50 mb-[31px] pt-[55px] flex items-center">
        <div onClick={() => setToggleMenu("close")} className="px-[21px] cursor-pointer">
          <img src="/svgs/OnboardLogoBlue.svg" alt="logo" className="h-12 w-12" />
        </div>
        {toggleMenu === "close" && (
          <div className="cursor-pointer  flex justify-end px-[21px] w-full  ">
            <div onClick={toggleNav} className="hover:scale-110 transition ease-in-out w-12 h-12 flex flex-col items-end justify-center gap-2">
              <Icon width={20} height={14} id="hamburger-icon" />
            </div>
          </div>
        )}
      </div>

      <div>
        <header className="h-[84vh] overflow-hidden w-[100vw]">
          <div className="absolute h-[84vh] w-full overflow-hidden">
            {transitions((style: any, i: any) => (
              <animated.div
                className="absolute h-[65vh]  w-full will-change-transform bg-cover bg-no-repeat bg-blend-multiply  animate-ltr-linear-infinite"
                style={{
                  ...style,
                  backgroundImage: `url(${slides[i]}`,
                }}
              />
            ))}
          </div>
          <Navbar home />
          <div className="h-[100%] -mt-[170px] md:-mt-[150px] flex items-center justify-center">
            <h2
              className={`animate-fade-in block w-[286px]  md:w-[609px] text-[24px] md:text-[48px] text-white mx-auto font-bold md:leading-[67px] text-center`}
            >
              Let’s get you admitted into your dream school{" "}
            </h2>{" "}
          </div>
        </header>
        <HeaderWidget />
      </div>
    </div>
  );
};

export default Header;
