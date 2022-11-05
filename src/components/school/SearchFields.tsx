import { useFormik } from "formik";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { SearchSchema } from "../../schemas/SearchSchema";
import { ISearchObject } from "../../utils/interfaces";
import { schoolPrograms } from "../../utils/selectOptions";
import Icon from "../Icons";
import LargeInputBox from "../InputBox/LargeInputBox";
import LargeSelectBox from "../InputSelect/LargeSelectBox";

const SearchFields = ({setEdit}: {setEdit?: Function}) => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width: 768px)');
  const [searchParams,] = useSearchParams();
  let searchQuery = Object.fromEntries([...searchParams])
  const formik = useFormik({
    initialValues: { 
      school_name: "",
      country_name: "",
      course_name: "",
      program_name: "",
      ...searchQuery
    },
    validationSchema: SearchSchema,
    onSubmit: values => {
        setEdit && setEdit(false);
        // let searchObject : ISearchObject = {...values}
        let searchObject = {...values}
        type searchKeys = keyof ISearchObject
        Object.keys(searchObject).forEach((key) => {
          if (searchObject[key as searchKeys] === '') {
            delete searchObject[key as searchKeys];
          }
        });
        navigate({
          pathname: '/search',
          search: createSearchParams({
            ...searchObject
          }).toString()
        })
    },
  });

  const handleSelectChange = (selectedRole: {label: string, value: string}) => {
    formik.setFieldValue('program_name', selectedRole.value)
  }
  return (
    <div className="bg-white rounded-xl px-[20px] py-[40px] md:px-[57px] md:py-[50px] space-y-6 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10">
        <LargeInputBox handleChange={formik.handleChange} value={formik.values.school_name} name="school_name" label="School name" iconId="school-icon" placeholder="Enter school name" />
        <LargeInputBox handleChange={formik.handleChange} value={formik.values.country_name} name="country_name" label="Country" iconId="location-icon" placeholder="Enter Country" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-0 gap-6">
        <div className="bg-grey-600 text-grey-500 rounded-xl  md:rounded-tl-xl md:rounded-none  md:rounded-bl-xl flex gap-4 items-center px-2 md:px-8 py-6 h-full largeselect tab:h-[105px]">
          <Icon width={24} height={24} id="graduation-icon" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[14px] md:text-[16px]">Program</h2>
            <LargeSelectBox value={formik.values.program_name} matches={matches} name="program" placeholder="Select Program" handleChange={(selectedRole: {label: string, value: string})=> handleSelectChange(selectedRole)} options={schoolPrograms} />
          </div>
        </div>{" "}
        <div className="bg-grey-600 text-grey-500 flex gap-4 rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl items-center h-full px-2 md:px-8 py-6">
          <Icon width={24} height={24} id="course-icon" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[14px] md:text-[16px]">Course</h2>
            <input name="course_name" value={formik.values.course_name} onChange={formik.handleChange} type="text" placeholder="Select Course" className="text-[#1B1B1B] outline-none text-[16px] md:text-[20px] bg-transparent" />
          </div>
        </div>
        {/* <div className="bg-grey-600 text-grey-500 pr-10 flex gap-4 rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl items-center px-2 md:px-8 py-6 largeselect tab:h-[105px]">
          <Icon width={24} height={24} id="course-icon" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[14px] md:text-[16px]">Course</h2>
            <LargeSelectBox matches={matches} name="course" placeholder="Select Course" handleChange={()=>{}} options={countryCodes} />
          </div>
        </div> */}
        {/* <div className="bg-grey-600 text-grey-500 rounded-xl  md:rounded-tl-xl md:rounded-none  md:rounded-bl-xl flex gap-4 items-center px-8 py-6">
          <Icon width={24} height={24} id="graduation-icon" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[14px] md:text-[16px]">Program</h2>
            <input type="text" placeholder="Select Country" className="text-[#1B1B1B] outline-none text-[16px] md:text-[20px] bg-transparent" />
          </div>
        </div>{" "}
        <div className="bg-grey-600 text-grey-500 pr-10 flex gap-4 rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl items-center px-8 py-6">
          <Icon width={24} height={24} id="course-icon" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[14px] md:text-[16px]">Course</h2>
            <input type="text" placeholder="Select Course" className="text-[#1B1B1B] outline-none text-[16px] md:text-[20px] bg-transparent" />
          </div>
        </div> */}
      </div>
      <button
        type="button"
        onClick={()=>formik.handleSubmit()}
        className="w-full col-span-2 cursor-pointer justify-center bg-green text-white flex gap-4 rounded-lg items-center px-[30px] py-[22px]"
      >
        <p className="text-center">Search</p>
        <Icon width={24} height={24} id="arrow-right-icon" />
      </button>
    </div>
  );
};

export default SearchFields;
