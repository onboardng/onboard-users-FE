import { HiOutlineChevronRight } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../../components/InputBox";
import AuthScreen from "../../components/Authentication/AuthScreen";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { iniitalSignupValues, SignupSchema } from "../../schemas/AuthSchema";
import { useLazyGoogleSignInQuery, useSignupUserMutation } from "../../redux/services";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import ReactPixel from "react-facebook-pixel"

const Register = () => {
  const [signup, { data, isLoading, isSuccess, isError, error }] = useSignupUserMutation();
  const [ trigger, { isFetching: googleLoading, data: googleData, isSuccess: googleSuccess } ] = useLazyGoogleSignInQuery()
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePixel = () => ReactPixel.trackCustom('Register')

  useEffect(() => {
    if(!googleLoading && googleSuccess){
      window.open(googleData?.data, '_blank')
    }
  }, [googleData, googleLoading, googleSuccess])

  const { values, handleChange, handleSubmit, handleBlur, touched, errors, resetForm } = useFormik({
    initialValues: iniitalSignupValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration Successful");
      handlePixel()
      navigate("/verify");
      resetForm();
    }
    if (isError && error && "status" in error) {
      toast.error(error?.data?.message);
    }
  }, [data, isLoading, isSuccess, isError, error, resetForm, navigate]);

  const handleGoogleLogin = () => {
    trigger({}).unwrap()
  }

  return (
    <AuthScreen title="Create Account" subtitle="Create Account to have an history of all you do on Onboard">
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <InputBox
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            name="email"
            placeholder="Email here"
            iconId="green-mail-icon"
            height={24}
            width={20}
            whole
            label="Email Address"
          />
        </div>
        <div className="mb-5">
          <InputBox
            placeholder="Password here"
            iconId="padlock-icon"
            height={19}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            name="password"
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
            error={errors.confirm_password}
            touched={touched.confirm_password}
            name="confirm_password"
            width={14}
            whole
            label="Confirm Password"
            password
            showPassword={showPassword}
            togglePassword={togglePassword}
          />
        </div>
        <div className="flex justify-end">
          <Button
            loader={isLoading}
            className="flex items-center justify-center text-white bg-green py-4 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green"
          >
            <p className="text-sm font-medium">Create Account</p>
            <HiOutlineChevronRight className="text-xl" />
          </Button>
        </div>
      </form>

      <div className="flex justify-center md:justify-end mt-5">
        <div className="flex items-center gap-4 text-base md:flex-row flex-col">
          <p>You can also sign in with</p>
          <div onClick={handleGoogleLogin} className="flex items-center py-2 px-5 gap-4 border-2 border-green rounded-md cursor-pointer">
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
    </AuthScreen>
  );
};

export default Register;
