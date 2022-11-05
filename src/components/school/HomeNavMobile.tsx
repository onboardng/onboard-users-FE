import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ISetState } from "../../utils/interfaces";
import Icon from "../Icons";

export const navItem = ["SignIn", "Sign Up"];

const NavMobile = ({ toggleMenu, setToggleMenu, initial }: { toggleMenu: string; setToggleMenu: ISetState<string>; initial: boolean }) => {
  const { authorization } = useSelector((state: RootState) => state.authStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
        {!authorization?.access_token ? (
          <>
            <div>
              <div
                className={`flex items-center mx-auto text-green text-lg mb-[36px] font-semibold px-5 cursor-pointer py-3 border-green border rounded-lg `}
                onClick={() => {
                  navigate("/login");
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
                  navigate("/register");
                  setToggleMenu("close");
                }}
              >
                <button className="w-[300px]  mx-auto min-h-[50px] bg-orange trans rounded-full text-white">Sign Up</button>{" "}
              </div>
            </div>
          </>
        ) : (
          <div>
            <div
              className={`flex items-center mx-auto text-white text-lg mb-[36px] font-semibold px-5 cursor-pointer py-3 bg-green rounded-lg `}
              onClick={handleLogout}
            >
              <button className="w-[300px]  mx-auto min-h-[50px] bg-orange trans rounded-full text-white">Logout</button>{" "}
            </div>
          </div>
        )}
      </div>
    </ul>
  );
};

export default NavMobile;
