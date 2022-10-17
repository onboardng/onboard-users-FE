import RegisterImage from "../../components/RegisterImage";
import { HiHome } from "react-icons/hi";

const Welcome = () => {
  return (
    <div className="w-full flex justify-between">
      <RegisterImage />
      <div className="w-[40%] h-screen bg-[#f5f5f5] flex flex-col justify-between py-5">
        <div className="bg-white  mx-16 mt-7 p-7 rounded-2xl h-[85%] flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold">Create Account</p>
            <p className="text-[#8B8BA4] font-medium text-[12px] mt-2">
              Create Account to have an history of all you do on Onboard
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <p className="text-base pb-1">Enter Code</p>
                <div className="flex items-center border-2 border-[#DADAE7] py-4 gap-3 px-3 text-sm">
                  <input
                    type="password"
                    placeholder="X X X X"
                    className="w-full focus:outline-none"
                  />
                </div>
                <p className="mt-1 text-sm">Resend Code?</p>
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
            <p className="text-base text-green font-semibold cursor-pointer">
              Sign In
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <HiHome className="text-xl" />
          <p className="text-base font-medium">Back to home</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
