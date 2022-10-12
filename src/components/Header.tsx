import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import HeaderWidget from "./HeaderWidget";
import Hero from "./Hero";
import Navbar from "./Navbar";

const slides = ["/static/images/SchoolImage1.png", "/static/images/SchoolImage3.png", "/static/images/SchoolImage2.png"];

const Header = () => {
  const [index, setIndex] = React.useState(0);
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

  return (
    <div>
      <header className="h-[84vh] overflow-hidden w-[100vw]">
        <div className="fixed h-[84vh] w-full bg-fixed overflow-hidden">
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
        <Navbar />
        <Hero index={index} setIndex={setIndex} />
      </header>
      <HeaderWidget index={index} setIndex={setIndex} />
    </div>
  );
};

export default Header;
