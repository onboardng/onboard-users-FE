import RegisterImage from "../../components/RegisterImage";
import { MdMail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { HiOutlineChevronRight, HiHome } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-full flex justify-between">
      <RegisterImage />
      <div className="w-[40%] h-screen bg-[#f5f5f5] flex flex-col justify-between py-7">
        <div className="bg-white  mx-16 mt-7 p-7 rounded-2xl">
          <p className="text-sm font-bold">Welcome Back</p>
          <p className="text-[#8B8BA4] font-medium text-[12px] mt-2">
            Sign in to have access to your account
          </p>
          <form action="" className="mt-5">
            <div className="mb-5">
              <p className="text-base pb-1">Email Address</p>
              <div className="flex items-center border-2 border-[#DADAE7] py-4 gap-3 px-3 text-sm">
                <MdMail className="text-green text-lg" />
                <input
                  type="email"
                  placeholder="Email here"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-5">
              <p className="text-base pb-1">Enter Password</p>
              <div className="flex items-center border-2 border-[#DADAE7] py-4 gap-3 px-3 text-sm">
                <GiPadlock className="text-green text-lg" />
                <input
                  type="password"
                  placeholder="Password here"
                  className="w-full focus:outline-none"
                />
              </div>
              <p className="text-end mt-1">Forgot Password?</p>
            </div>
            <div className="flex items-center justify-center text-white bg-green py-4 gap-3 px-3 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
              <p className="text-sm font-medium">Sign In</p>
              <HiOutlineChevronRight className="text-xl" />
            </div>
          </form>

          <div className="flex justify-end mt-5">
            <div className="flex items-center gap-4 text-base">
              <p>You can also sign in with</p>
              <div className="flex items-center py-2 px-5 gap-4 border-2 border-green rounded-md cursor-pointer">
                <FcGoogle />
                <p className="text-sm font-medium text-green">Google</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-center items-center">
            <p className="text-base">Don’t have an account?</p>
            <p className="text-base text-green font-semibold cursor-pointer">
              Create an account
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

export default Login;
