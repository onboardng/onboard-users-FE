import React from "react";
const RegisterImage = () => {
  return (
    <div className="hidden md:block bg-register h-screen w-[60%] bg-no-repeat bg-cover bg-center">
      <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center flex-col">
        <img src="/svgs/Onboard Logo - White 1.svg" alt="logo" />
        <p className="text-2xl text-white font-semibold text-center leading-[60px]">
          Your Lifestyle + Education <br />
          Solution
        </p>
      </div>
    </div>
  );
};

export default RegisterImage;
