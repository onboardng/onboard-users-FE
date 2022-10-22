import { SetStateAction } from "react";
import { Dispatch } from "react";

export type ISetState<T> = Dispatch<SetStateAction<T>>;

export interface ISignUpDetails {
  email: string;
  password: string;
  confirm_password: string;
}
export interface IRootQueryParams {
  limit: number;
  page: number;
}

export type UniversityData = {
  description: string;
  id: string;
  name: string;
  picture: string;
  ratings: number;
  added_by: null;
  address: string;
  country: string;
  created_at: string;
  deleted: boolean;
  picture_2: string;
  updated_at: string;
};

export interface ListUniversitiesResponse {
  count: number;
  rows: Partial<UniversityData>[];
}
