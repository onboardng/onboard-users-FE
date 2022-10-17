import React, { ReactNode } from "react";
import Footer from "./Footer";
import RegisterImage from "./RegisterImage";

const AuthScreen = ({ children, title, subtitle }: { title: string; subtitle: string; children: ReactNode }) => {
  return (
    <div className="w-full flex justify-between">
      <RegisterImage />
      <div className="w-full md:w-[40%] h-screen bg-[#f5f5f5] flex flex-col justify-center py-5">
        <div className="bg-white mx-4  md:mx-16 p-7 rounded-2xl">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-[#8B8BA4] font-medium text-[12px] mt-2">{subtitle}</p>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthScreen;
