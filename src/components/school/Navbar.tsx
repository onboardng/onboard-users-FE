import { Link } from "react-router-dom";
import Icon from "../Icons";

const Navbar = () => {
  return (
    <>
      <div className="md:hidden z-50 mb-[31px] pt-[55px] pb-[30px] bg-white flex items-center">
        <Link to="/" className="md:hidden flex absolute justify-start w-full pl-8 -mt-6">
          <Icon width={9} height={16} id="left-arrow-icon" />
        </Link>
      </div>
      <div className={`bg-white px-[57px] hidden md:flex relative md:py-[17px] justify-between items-center`}>
        <div>
          <img src="/svgs/OnboardLogoBlue.svg" alt="logo" />
        </div>
        <div className=" gap-[27px] items-center hidden md:flex">
          <button className="border text-white border-white rounded-lg px-4 py-2">Sign In</button>
          <button className="bg-white rounded-lg text-primary px-4 py-2">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
