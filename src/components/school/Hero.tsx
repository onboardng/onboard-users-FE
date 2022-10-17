import React, { Dispatch, SetStateAction } from "react";

const Hero = ({ index, setIndex }: { index: number; setIndex: Dispatch<SetStateAction<number>> }) => {
  return (
    <div className="h-[100%] -mt-[150px] flex items-center justify-center">
      <h2
        className={`${
          index === 0 ? "animate-fade-in block" : "hidden animate-fade-out"
        } max-w-[609px] text-[48px] text-white mx-auto font-bold md:leading-[67px] text-center`}
      >
        Get the best room deals, anywhere in the world
      </h2>
      <h2
        className={`${
          index === 1 ? "animate-fade-in block" : "animate-fade-out hidden"
        } max-w-[510px] text-[48px] text-white mx-auto font-bold md:leading-[67px] text-center`}
      >
        The best flight deals, you can find anywhere
      </h2>
      <h2
        className={`${
          index === 2 ? "animate-fade-in block" : "animate-fade-out hidden"
        } max-w-[590px] text-[48px] text-white mx-auto font-bold md:leading-[67px] text-center`}
      >
        Let’s take you to Dubai with EASE
      </h2>
    </div>
  );
};

export default Hero;
