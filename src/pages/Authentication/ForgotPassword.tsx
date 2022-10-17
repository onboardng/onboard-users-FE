import InputBox from "../../components/InputBox";
import { Link } from "react-router-dom";
import AuthScreen from "../../components/Authentication/AuthScreen";
import { useState } from "react";

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  return (
    <AuthScreen title="Forgot Password" subtitle="Kindly enter the mail associated with your account.">
      {successMessage ? (
        <h5 className="text-[16px] md:leading-[160%] font-normal max-w-[380px] mb-72 mt-2">
          An email with your recovery link has been sent to you. Please check your mail.
        </h5>
      ) : (
        <>
          <form action="" className="mt-5">
            <div className="mb-5">
              <InputBox placeholder="Email here" whole label="Enter Email Address" iconId="green-mail-icon" height={24} width={20} />
            </div>
            <div className="flex justify-end mb-72" onClick={() => setSuccessMessage(true)}>
              <div className="flex items-center justify-center  text-white bg-green py-3 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
                <p className="text-sm font-medium">Continue</p>
              </div>
            </div>
          </form>
        </>
      )}
      <div className="mt-8 flex flex-col justify-center items-center">
        <p className="text-base">Already have an account?</p>
        <Link to="/login" className="text-base text-green font-semibold cursor-pointer">
          Sign In
        </Link>
      </div>
    </AuthScreen>
  );
};

export default ForgotPassword;
