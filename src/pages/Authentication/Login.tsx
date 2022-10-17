import { HiOutlineChevronRight } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import InputBox from "../../components/InputBox";
import { Link } from "react-router-dom";
import AuthScreen from "../../components/Authentication/AuthScreen";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <AuthScreen title={"Welcome Back"} subtitle={"Sign in to have access to your account"}>
      <form action="" className="mt-5">
        <div className="mb-5">
          <InputBox placeholder="Email here" iconId="green-mail-icon" height={20} width={20} whole label="Email Address" />
        </div>
        <div className="mb-5 w-full">
          <InputBox
            placeholder="Password here"
            iconId="padlock-icon"
            height={19}
            width={14}
            whole
            label="Enter Password"
            password
            showPassword={showPassword}
            togglePassword={togglePassword}
          />
          <Link to="/forgot-password" className="justify-end flex">
            <p className="text-end mt-1 ">Forgot Password?</p>
          </Link>
        </div>
        <div className="flex items-center justify-center text-white bg-green py-4 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
          <p className="text-sm font-medium">Sign In</p>
          <HiOutlineChevronRight className="text-xl" />
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

      <div className="mt-12 flex flex-col justify-center items-center">
        <p className="text-base">Don’t have an account?</p>
        <Link to="/register" className="text-base text-green font-semibold cursor-pointer mt-1">
          Create an account
        </Link>
      </div>
    </AuthScreen>
  );
};

export default Login;
