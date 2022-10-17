import InputBox from "../../components/InputBox";
import { Link } from "react-router-dom";
import AuthScreen from "../../components/Authentication/AuthScreen";

const Verify = () => {
  return (
    <AuthScreen title="Create Account" subtitle="A verification code has been sent to your mail. Kindly input it below.">
      <form action="" className="mt-5">
        <div className="mb-5">
          <InputBox placeholder="X X X X" whole label="Enter Code" />
          <p className="mt-5 text-sm">Resend Code?</p>
        </div>
        <div className="flex justify-end mb-72">
          <div className="flex items-center justify-center  text-white bg-green py-3 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
            <p className="text-sm font-medium">Continue</p>
          </div>
        </div>
      </form>
      <div className="mt-8 flex flex-col justify-center items-center">
        <p className="text-base">Already have an account?</p>
        <Link to="/login" className="text-base text-green font-semibold cursor-pointer">
          Sign In
        </Link>
      </div>
    </AuthScreen>
  );
};

export default Verify;
