import { SetStateAction } from "react";
import { Dispatch } from "react";

export type ISetState<T> = Dispatch<SetStateAction<T>>;

export interface ISignUpDetails {
  email: string;
  password: string;
  confirm_password: string;
}
