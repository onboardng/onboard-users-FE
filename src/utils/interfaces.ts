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
  pictures: string[];
};

export type CourseData = {
  id: string;
  description: string;
  name: string;
  created_at: string;
  updated_at: string;
  UniversityId: string;
  ProgramId: string;
  available_diet?: any
}

export interface ListCoursesResponse {
  count: number;
  rows: Partial<CourseData>[];
}

export interface ListUniversitiesResponse {
  count: number;
  rows: Partial<UniversityData>[];
}

// interface IObjectKeys {
//   [key: string]: string | number;
// }

export interface ISearchObject {
  school_name: string; 
  country_name: string; 
  course_name: string; 
  program_name: string
}
