import RegisterImage from "../../../components/RegisterImage";
import InputBox from "../../../components/InputBox";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

const Verify = () => {
  return (
    <div className="w-full flex justify-between">
      <RegisterImage />
      <div className="w-full md:w-[40%] h-screen bg-[#f5f5f5] flex flex-col justify-center py-5">
        <div className="bg-white mx-4 md:mx-16 mt-7 p-7 rounded-2xl h-[85%] flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold">Create Account</p>
            <p className="text-[#8B8BA4] font-medium text-[12px] mt-2">A verification code has been sent to your mail. Kindly input it below.</p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <InputBox placeholder="X X X X" whole label="Enter Code" />
                <p className="mt-5 text-sm">Resend Code?</p>
              </div>
              <div className="flex justify-end">
                <div className="flex items-center justify-center text-white bg-green py-3 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
                  <p className="text-sm font-medium">Continue</p>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-8 flex flex-col justify-center items-center">
            <p className="text-base">Already have an account?</p>
            <Link to="/login" className="text-base text-green font-semibold cursor-pointer">
              Sign In
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Verify;
