import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../hooks/useClickOutside";
import { RootState } from "../../redux/store";
import Icon from "../Icons";

const Navbar = ({ home }: { home?: boolean }) => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);
  const [dropDownNotification, setDropDownNotification] = useState(false);
  const { authorization, user } = useSelector((state: RootState) => state.authStore);
  const ref = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useOnClickOutside(ref, () => {
    dropDown && setDropDown(false);
  });

  useOnClickOutside(notificationRef, () => {
    dropDownNotification && setDropDownNotification(false);
  });

  return (
    <>
      <div
        className={`tab:hidden relative md:pt-[17px] flex justify-between items-center ${
          !home ? "bg-white sticky top-0 z-[10] px-[57px] py-3" : "mx-[57px]"
        }`}
      >
        <div className="hidden md:block cursor-pointer" onClick={() => navigate("/")}>
          <img src={`${!home ? "/svgs/OnboardLogoBlue.svg" : "/svgs/Onboard Logo - White 1.svg"}`} alt="logo" />
        </div>
        {!authorization?.access_token ? (
          <div className=" gap-[27px] items-center hidden md:flex">
            <Link to="/login">
              <button className={`${!home ? "text-primary border-primary" : "text-white border-white"} border rounded-lg px-4 py-2`}>Sign In</button>
            </Link>
            <Link to="/register">
              <button className={`${!home ? "bg-primary text-white" : "bg-white text-primary"} rounded-lg px-4 py-2`}>Sign Up</button>
            </Link>
          </div>
        ) : (
          <>
            <div ref={ref} className="group relative ">
              <div className="pl-8">
                <li className="flex items-center pt-2 cursor-pointer" onClick={() => setDropDown((val) => !val)}>
                  <img className=" w-10 h-10 mr-2 rounded-full" alt="avatar" src={user?.profile_picture || `/static/images/dummyUser.jpg`} />

                  <span className="pl-3">
                    <Icon id={"arrow-down-icon"} width={24} height={24} />
                  </span>
                </li>
              </div>
              <div
                className={`${
                  dropDown ? "block" : "hidden"
                } shadow-[0px_4px_20px_rgba(0,0,0,0.08)] right-0 absolute z-[1] mt-5 bg-white w-[250px] rounded-[10px]`}
              >
                <div className="px-5">
                  <li
                    className="flex items-center pt-5 pb-3 border-[#979797] cursor-pointer border-b-[1px]"
                    onClick={() => {
                      setDropDown((val) => !val);
                    }}
                  >
                    <img className=" w-10 h-10 mr-2 rounded-full" alt="avatar" src={user?.profile_picture || `/static/images/dummyUser.jpg`} />
                    <aside>
                      <h1 className=" text-sm text-black font-semibold">{user?.full_name || `Onboard User`}</h1>
                      <p className=" font-medium text-[#959595] text-[12px] leading-[14.52px] capitalize">{"User"}</p>
                    </aside>
                  </li>
                  <li className="text-[#959595] flex mt-5 mb-5 cursor-pointer" onClick={handleLogout}>
                    <span className="ml-2">Log out</span>
                  </li>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
