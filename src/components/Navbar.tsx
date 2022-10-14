import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ home }: { home?: boolean }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`tab:hidden relative md:pt-[17px] flex justify-between items-center ${
          !home ? "bg-white sticky top-0 z-[10] px-[57px] py-3" : "mx-[57px]"
        }`}
      >
        <div
          className="hidden md:block cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={`${
              !home
                ? "/svgs/OnboardLogoBlue.svg"
                : "/svgs/Onboard Logo - White 1.svg"
            }`}
            alt="logo"
          />
        </div>
        <div className=" gap-[27px] items-center hidden md:flex">
          <Link to="/login">
            <button
              className={`${
                !home
                  ? "text-primary border-primary"
                  : "text-white border-white"
              } border rounded-lg px-4 py-2`}
            >
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button
              className={`${
                !home ? "bg-primary text-white" : "bg-white text-primary"
              } rounded-lg px-4 py-2`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
