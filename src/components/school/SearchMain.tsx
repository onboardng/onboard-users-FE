import { Dispatch, SetStateAction } from "react";
import Icon from "../Icons";

const SearchMain = ({ showEdit, setShowFilter }: { showEdit: Dispatch<SetStateAction<boolean>>; setShowFilter: typeof showEdit }) => {
  return (
    <div className="md:w-[70%] w-full mx-5">
      <div className="py-7 px-5 flex md:flex-row flex-col items-center justify-between bg-white rounded-xl md:rounded-none">
        <p className="text-md">
          University in <b>Lagos Nigeria,</b> offering <b>BSc.</b> for <b>Political Science</b>
        </p>
        <div className="flex items-center gap-3 mt-4 md:mt-0 rounded-xl">
          <div
            onClick={() => showEdit(true)}
            className="cursor-pointer flex gap-4 px-2 md:px-5 py-2 rounded-lg border-primary  items-center text-primary border"
          >
            <Icon id="pencil-icon" width={18} height={18} />
            <p className="text-sm md:text-md text-primary">Edit Instruction</p>
          </div>{" "}
          <div
            onClick={() => setShowFilter(true)}
            className="cursor-pointer md:hidden flex gap-4 px-2 py-2 rounded-lg border-primary  items-center text-primary border"
          >
            <Icon id="filter-icon" width={18} height={18} />
            <p className="text-sm text-primary">Filter</p>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-[42px] mb-3 rounded-xl flex gap-4 px-5 pt-2 items-start bg-filter bg-no-repeat bg-cover bg-blend-multiply w-full h-[101px] relative  ">
        {/* <img src="/static/images/school.png" alt="card" className="w-full opacity-50" /> */}
        <div className="absolute flex gap-4 items-center">
          <div className="rounded-full flex items-center justify-center h-[35px] w-[35px] bg-white bg-opacity-5">
            <Icon width={16} height={18} id="search-icon" />{" "}
          </div>
          <div>
            <h5 className="text-white left-3 bottom-[30px] text-sm md:w-[138px]">Already booked an admission?</h5>
            <div className="flex text-white items-center  left-3">
              <p className="text-[10px]">Track Booking</p>
              <Icon width={24} height={24} id="arrow-right-icon" />
            </div>
          </div>
        </div>
      </div>{" "}
      <p className="my-5 text-lg">6 universities found</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-4">
        {Array(6)
          .fill("")
          ?.map((_, index) => (
            <div className="flex flex-col  md:h-[555px] bg-white gap-5" key={index}>
              <div className="flex gap-4 justify-center bg-no-repeat bg-cover w-full md:h-[259px]">
                <img src="/static/images/school.png" alt="card" className="w-full" />
              </div>
              <div className="px-5">
                <p className="text-[28px] font-semibold">University of Lagos</p>
                <div className="flex gap-2 mt-[14px]">
                  {Array(5)
                    .fill("")
                    .map((_, index) => (
                      <Icon id="star-icon-filled" width={18} height={17} key={index} />
                    ))}
                </div>
                <p className="mt-[8px] mb-[10px] text-sm text-gray-600">20 ratings total</p>
                <div className="flex gap-2 items-center">
                  <Icon width={18} height={20} id="location-icon-green" />
                  <p className="text-md">Lagos, Nigeria</p>{" "}
                </div>
                <button className="mt-10 mb-10 col-span-2 justify-center bg-green text-white flex gap-2 rounded-md items-center w-full md:px-[74.5px] py-[17px]">
                  <p className="text-center">View School</p>
                  <Icon width={24} height={24} id="arrow-right-icon" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchMain;