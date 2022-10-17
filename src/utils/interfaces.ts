import { SetStateAction } from "react";
import { Dispatch } from "react";

export type ISetState<T> = Dispatch<SetStateAction<T>>;
