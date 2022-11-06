import { useNavigate } from "react-router-dom";
import Icon from "../Icons";
import InputBox from "../InputBox";

const SearchSideBar = ({ showFilter }: { showFilter?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` bg-white rounded-xl  ${
        showFilter
          ? "absolute md:relative md:h-[793px] ml-5 mx-auto w-[93%] md:w-[30%] md:mx-5 z-50 overflow-hidden"
          : " h-[793px] md:w-[30%] hidden md:block mx-5"
      } `}
    >
      <div className="flex justify-between bg-[#E7FAFF] p-5">
        <p className="text-[14px] text-black">Extra Filter</p>
        <p className="text-[10px] text-[#6FA7B4] font-semibold">Clear all</p>
      </div>
      <div className="p-5">
        <p className="text-[14px] mb-1">University name</p>
        <InputBox placeholder="Enter name here" height={24} width={24} />
        <p className="text-[14px] text-[#8B8BA4] mt-1">Press enter to search</p>
        <p className="mt-[30px] font-semibold">Rating</p>
        <div className="flex gap-2 mt-[14px]">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <Icon id="star-icon" width={18} height={17} key={index} />
            ))}
        </div>
        <p className="text-xs mt-1 text-grey-500">Select a star to set rating parameter</p>
      </div>
      {showFilter && (
        <div className="mx-5 col-span-2 justify-center bg-green text-white flex gap-4 rounded-lg items-center px-[30px] py-[22px]">
          <p className="text-center">Apply</p>
          <Icon width={24} height={24} id="arrow-right-icon" />
        </div>
      )}
      <div className="md:mt-[194px] p-5">
        {!showFilter && (
          <div className="flex gap-4 overflow-hidden rounded-xl items-start bg-filter bg-no-repeat bg-cover bg-blend-multiply w-full h-[101px] relative  ">
            <img src="/static/images/SchoolImage2.png" alt="card" className="h-full w-full object-cover opacity-20" />
            <div className="absolute flex gap-4 items-center px-5 pt-4">
              <div className="rounded-full flex items-center justify-center h-[35px] w-[35px] bg-white bg-opacity-5">
                <Icon width={16} height={18} id="search-icon" />{" "}
              </div>
              <div>
                <h5 className="text-white left-3 bottom-[30px] text-sm w-[138px]">Already booked an admission?</h5>
                <div onClick={() => navigate("/booking/schools/1")} className="flex text-white items-center left-3 cursor-pointer">
                  <p className="text-[10px]">Track Booking</p>
                  <Icon width={24} height={24} id="arrow-right-icon" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSideBar;
