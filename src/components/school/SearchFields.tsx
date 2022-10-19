import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { countryCodes } from "../../utils/countrycodes";
import Icon from "../Icons";
import LargeInputBox from "../InputBox/LargeInputBox";
import LargeSelectBox from "../InputSelect/LargeSelectBox";

const SearchFields = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width: 768px)')
  return (
    <div className="bg-white rounded-xl px-[20px] py-[40px] md:px-[57px] md:py-[50px] space-y-6 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10">
        <LargeInputBox label="School name" iconId="school-icon" placeholder="Enter school name" />
        <LargeInputBox label="Country" iconId="location-icon" placeholder="Enter Country" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-0 gap-6">
        <div className="bg-grey-600 text-grey-500 rounded-xl  md:rounded-tl-xl md:rounded-none  md:rounded-bl-xl flex gap-4 items-center px-2 md:px-8 py-6 largeselect tab:h-[105px]">
          <Icon width={24} height={24} id="graduation-icon" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[14px] md:text-[16px]">Program</h2>
            <LargeSelectBox matches={matches} name="program" placeholder="Select Program" handleChange={()=>{}} options={countryCodes} />
          </div>
        </div>{" "}
        <div className="bg-grey-600 text-grey-500 md:pr-5 flex gap-4 rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl items-center px-2 md:px-8 py-6 largeselect tab:h-[105px]">
          <Icon width={24} height={24} id="course-icon" />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[14px] md:text-[16px]">Course</h2>
            <LargeSelectBox matches={matches} name="course" placeholder="Select Course" handleChange={()=>{}} options={countryCodes} />
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
      <div
        onClick={() => navigate("/search")}
        className="col-span-2 cursor-pointer justify-center bg-green text-white flex gap-4 rounded-lg items-center px-[30px] py-[22px]"
      >
        <p className="text-center">Search</p>
        <Icon width={24} height={24} id="arrow-right-icon" />
      </div>
    </div>
  );
};

export default SearchFields;
