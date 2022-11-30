import React, { Dispatch, SetStateAction } from "react";
import Icon from "../Icons";

import Card from "../Shared/Card";
import { CardProps } from "../../interfaces";

const SearchMain = ({
  showEdit,
  setShowFilter,
  data,
}: {
  showEdit: Dispatch<SetStateAction<boolean>>;
  setShowFilter: typeof showEdit;
  data: any;
}) => {

  return (
    <div className="md:w-[70%] w-full mx-5">
      <div className="py-7 px-5 flex md:flex-row flex-col items-center justify-between bg-white rounded-xl">
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
      <div className="md:hidden mt-[42px] mb-3 rounded-xl flex gap-4 items-start bg-filter bg-no-repeat bg-cover bg-blend-multiply w-full h-[101px] relative  ">
        <img src="/static/images/SchoolImage2.png" alt="card" className="h-full w-full object-cover opacity-20" />
        <div className="absolute flex gap-4 items-center px-5 mt-3">
          <div className="rounded-full flex items-center justify-center h-[35px] w-[35px] bg-white bg-opacity-5">
            <Icon width={16} height={18} id="search-icon" />{" "}
          </div>
          <div>
            <h5 className="text-white left-3 bottom-[30px] text-sm md:w-[138px]">Already booked an admission?</h5>
            <a href="#bookhere" className="flex text-white items-center left-3 cursor-pointer">
                <p className="text-[10px]">Track Booking</p>
                <Icon width={24} height={24} id="arrow-right-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="my-8">
        {data && data?.length > 0 && (
          <div className="font-bold text-lg leading-8">
            {data?.length < 2 ? '1 university found' : `${data?.length} universities found.`}
          </div>
        )}
      </div>

      <div className="my-10">
        {data && data?.length === 0 ? (
          <p className="my-5 text-lg">No data found. Please try a new search.</p>
        ): (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-4">
            {data?.map((result:CardProps) => <Card key={result.id} {...result} />)}
          </div>
        )}
      </div>
      <div id="bookhere"></div>
    </div>
  );
};

export default SearchMain;
