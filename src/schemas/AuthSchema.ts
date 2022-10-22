import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email format").trim().required("Company email is a required field"),
  password: Yup.string().required("Password is required").min(8, "minimum of 8 characters"),
});

export const SignupSchema = LoginSchema.shape({
  confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

type ISignUpDetails = Yup.InferType<typeof SignupSchema>;

export const iniitalSignupValues: ISignUpDetails = {
  email: "",
  password: "",
  confirm_password: undefined,
};

export const initialSigninValues: Partial<ISignUpDetails> = {
  email: "",
  password: "",
};
