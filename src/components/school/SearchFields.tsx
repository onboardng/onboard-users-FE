import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useUniversitySearchQuery } from "../../redux/services";
import { ISearchObject } from "../../utils/interfaces";
import { countryList, schoolPrograms } from "../../utils/selectOptions";
import Icon from "../Icons";
import LargeInputBox from "../InputBox/LargeInputBox";
import LargeSelectBox from "../InputSelect/LargeSelectBox";
import { FiChevronRight } from "react-icons/fi"

const SearchFields = ({ setEdit }: { setEdit?: Function }) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 768px)");
  const [skip, setSkip] = useState(true);
  const [show, setShow] = useState(false);
  const [searchParams] = useSearchParams();
  let searchQuery = Object.fromEntries([...searchParams]);

  const formik = useFormik({
    initialValues: {
      school_name: "",
      country_name: "",
      course_name: "",
      program_name: "",
      ...searchQuery,
    },
    onSubmit: (values) => {
      setEdit && setEdit(false);
      let searchObject = { ...values };
      type searchKeys = keyof ISearchObject;
      Object.keys(searchObject).forEach((key) => {
        if (searchObject[key as searchKeys] === "") {
          delete searchObject[key as searchKeys];
        }
      });
      navigate({
        pathname: "/search",
        search: createSearchParams({
          ...searchObject,
        }).toString(),
      });
    },
  });

  const { data, isFetching, isLoading } = useUniversitySearchQuery(formik.values.school_name, { skip });

  useEffect(() => {
    if (formik.values.school_name.length > 1) {
      if (skip) setSkip(false);
    } else {
      if (!skip) setSkip(true);
    }
  }, [formik.values.school_name, skip]);

  const handleSelectSearch = (searchResult: string) => {
    formik.setFieldValue("school_name", searchResult);
    setShow(false);
  };

  const handleSelectChange = (selectedRole: { label: string; value: string }, field: string) => {
    formik.setFieldValue(field, selectedRole.value);
  };
  return (
    <div className="bg-white rounded-xl px-[20px] py-[40px] md:px-[57px] md:py-[50px] space-y-6 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10">
        <div className="bg-grey-600 text-grey-500 rounded-xl relative">
          <LargeInputBox
            onBlur={() => setShow(false)}
            onFocus={() => setShow(true)}
            handleChange={formik.handleChange}
            value={formik.values.school_name}
            name="school_name"
            label="School name"
            iconId="school-icon"
            placeholder="Enter school name"
          />
          {show && (
            <div className="absolute overflow-y-auto w-full bg-white h-[250px] z-[3] rounded-[10px]">
              <div className="p-1 overflow-y-auto">
                <div className="flex flex-wrap">
                  {(!isFetching || !isLoading) &&
                    data?.data?.map((val: any, index: number) => (
                      <div key={index} className="p-2">
                        <p
                          onMouseDown={() => handleSelectSearch(val?.name)}
                          className="bg-[#EDEDF2] cursor-pointer rounded-[5px] text-[14px] leading-[22.4px] p-2 w-fit"
                        >
                          {val?.name}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-grey-600 text-grey-500 rounded-xl flex gap-4 items-center px-2 md:px-8 py-6 h-full largeselect tab:h-[105px]">
          <Icon width={24} height={24} id="location-icon" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[14px] md:text-[16px]">Country</h2>
            <LargeSelectBox
              value={formik.values.country_name}
              disabled
              matches={matches}
              name="country_name"
              placeholder="Enter Country"
              handleChange={(selectedRole: { label: string; value: string }) => handleSelectChange(selectedRole, "country_name")}
              options={countryList}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10 gap-6">
        <div className="bg-grey-600 text-grey-500 rounded-xl flex gap-4 items-center px-2 md:px-8 py-6 h-full largeselect tab:h-[105px]">
          <Icon width={24} height={24} id="graduation-icon" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[14px] md:text-[16px]">Program</h2>
            <LargeSelectBox
              value={formik.values.program_name}
              matches={matches}
              name="program"
              placeholder="Select Program"
              handleChange={(selectedRole: { label: string; value: string }) => handleSelectChange(selectedRole, "program_name")}
              options={schoolPrograms}
            />
          </div>
        </div>{" "}
        <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl items-center h-full px-2 md:px-8 py-6">
          <Icon width={24} height={24} id="course-icon" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[14px] md:text-[16px]">Course</h2>
            <input
              name="course_name"
              value={formik.values.course_name}
              onChange={formik.handleChange}
              type="text"
              placeholder="Select Course"
              className="text-[#1B1B1B] outline-none text-[16px] md:text-[20px] bg-transparent"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        disabled={!formik.values.program_name || !formik.values.course_name}
        onClick={() => formik.handleSubmit()}
        className="w-full col-span-2 cursor-pointer justify-center bg-green text-white flex gap-4 rounded-lg items-center px-[30px] py-[22px] disabled:bg-gray-500"
      >
        <p className="text-center">Search</p>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default SearchFields;
