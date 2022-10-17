import InputBox from "../../components/InputBox";
import AuthScreen from "../../components/Authentication/AuthScreen";
import { useState } from "react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <AuthScreen title="Reset Password" subtitle="Please enter your new password">
      <form action="" className="mt-5">
        <div className="mb-5">
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
        </div>
        <div className="mb-8">
          <InputBox
            placeholder="Password here"
            iconId="padlock-icon"
            height={19}
            width={14}
            whole
            label="Confirm Password"
            password
            showPassword={showPassword}
            togglePassword={togglePassword}
          />
        </div>
        <div className="flex justify-end mb-4">
          <div className="flex items-center justify-center  text-white bg-green py-3 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
            <p className="text-sm font-medium">Continue</p>
          </div>
        </div>
      </form>
    </AuthScreen>
  );
};

export default ResetPassword;
