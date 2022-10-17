import RegisterImage from "../../../components/RegisterImage";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import InputBox from "../../../components/InputBox";
import Footer from "../../../components/Footer";

const Register = () => {
  return (
    <div className="w-full flex justify-between">
      <RegisterImage />
      <div className="w-full md:w-[40%] h-screen bg-[#f5f5f5] flex flex-col justify-center py-5">
        <div className="bg-white mx-4  md:mx-16 md:mt-7 p-7 rounded-2xl">
          <p className="text-sm font-bold">Create Account</p>
          <p className="text-[#8B8BA4] font-medium text-[12px] mt-2">Create Account to have an history of all you do on Onboard</p>
          <form action="" className="mt-5">
            <div className="mb-5">
              <InputBox placeholder="Email here" iconId="green-mail-icon" height={18} width={15} whole label="Email Address" />
            </div>
            <div className="mb-5">
              <InputBox placeholder="Password here" iconId="padlock-icon" height={19} width={14} whole label="Enter Password" />
            </div>
            <div className="mb-5">
              <InputBox placeholder="Password here" iconId="padlock-icon" height={19} width={14} whole label="Confirm Password" />
            </div>
            <div className="flex justify-end">
              <Link
                to="/welcome"
                className="flex items-center justify-center text-white bg-green py-4 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green"
              >
                <p className="text-sm font-medium">Create Account</p>
                <HiOutlineChevronRight className="text-xl" />
              </Link>
            </div>
          </form>

          <div className="flex justify-center md:justify-end mt-5">
            <div className="flex items-center gap-4 text-base md:flex-row flex-col">
              <p>You can also sign in with</p>
              <div className="flex items-center py-2 px-5 gap-4 border-2 border-green rounded-md cursor-pointer">
                <FcGoogle />
                <p className="text-sm font-medium text-green">Google</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center items-center">
            <p className="text-base">Already have an account?</p>
            <Link to="/login" className="text-base text-green font-semibold cursor-pointer mt-1">
              Sign In
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
