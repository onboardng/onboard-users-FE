import { Dispatch, SetStateAction } from "react";
import Icon from "./Icons";

const Navbar = ({
  toggleMenu,
  setToggleMenu,
  setInitial,
}: {
  bg?: boolean;
  toggleMenu: string;
  setToggleMenu: Dispatch<SetStateAction<string>>;
  setInitial: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="md:hidden z-50 pb-[31px] pt-[55px] bg-white md:bg-none flex items-center">
        <div className="px-[21px] cursor-pointer">
          <img src="/svgs/OnboardLogoBlue.svg" alt="logo" className="h-12 w-12" />
        </div>
        {toggleMenu === "close" && (
          <div className="cursor-pointer  flex justify-end px-[21px] w-full  ">
            <div
              onClick={() => {
                setToggleMenu("open");
                setInitial(true);
              }}
              className="hover:scale-110 z-50 transition ease-in-out w-12 h-12 flex flex-col items-end justify-center gap-2"
            >
              <Icon width={20} height={14} id="hamburger-icon" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
