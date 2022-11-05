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

export const UpdateProfileSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  profile_picture: Yup.string().notRequired(),
  location: Yup.string().required("Location is required"),
});

export const initialUpdateProfileValues = {
  first_name: "",
  last_name: "",
  profile_picture: "",
  location: "",
};
