import React from "react";
import { ISetState } from "../../utils/interfaces";
import Icon from "../Icons";

const MobileNav = ({
  toggleMenu,
  setToggleMenu,
  setInitial,
}: {
  toggleMenu: string;
  setToggleMenu: ISetState<string>;
  setInitial: ISetState<boolean>;
}) => {
  return (
    <>
      {toggleMenu === "close" ? (
        <div className="md:hidden sticky top-0 z-50 pb-[31px] pt-[55px] bg-white md:bg-none flex items-center">
          <>
            <div className="px-[21px] cursor-pointer">
              <img src="/svgs/OnboardLogoBlue.svg" alt="logo" className="h-12 w-12" />
            </div>
            <div className="cursor-pointer  flex justify-end px-[21px] w-full  ">
              <div
                onClick={() => {
                  setToggleMenu && setToggleMenu("open");
                  setInitial && setInitial(true);
                }}
                className="hover:scale-110 z-50 transition ease-in-out w-12 h-12 flex flex-col items-end justify-center gap-2"
              >
                <Icon width={20} height={14} id="hamburger-icon" />
              </div>
            </div>
          </>
        </div>
      ) : (
        toggleMenu === "open" && <div className="h-[134px]"></div>
      )}
    </>
  );
};

export default MobileNav;
