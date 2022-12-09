import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import Icon from "../Icons";
import Card from "../Shared/Card";
import { School, SchoolResponse } from "../../interfaces";
import Pagination from "../Pagination/Pagination";
// import { useHttpRequest } from "../../hooks/useHttpRequest";

const SearchMain = ({
  showEdit,
  setShowFilter,
  data,
}: {
  showEdit: Dispatch<SetStateAction<boolean>>;
  setShowFilter: typeof showEdit;
  data: any
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams
  const country_name = searchQuery.get("country_name")
  const course_name = searchQuery.get("course_name")
  const program_name = searchQuery.get("program_name")

  const [schools, setSchools] = useState<SchoolResponse | null>(null)
  
  const destructureData = () => {
    if(data) {
      setSchools(data?.data)
    }
  }

  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    setPage(parseInt(searchParams?.get('page') || "1"));
  }, [searchParams])

  const onPageChange = (page: number) => {
    setSearchParams({page: page.toString()})
  }

  const handlePagination = () => {
    if(schools) {
      if(schools?.no_of_schools > 10) {
        return <Pagination onPageChange={onPageChange} pageSize={10} currentPage={page} totalCount={schools?.no_of_schools} />
      } else {
        return <></>
      }
    }
  }

  useEffect(() => {
    destructureData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="md:w-[70%] w-full mx-5">
      <div className="py-7 px-5 flex md:flex-row flex-col items-center justify-between bg-white rounded-xl">
        <p className="text-md">
          University {country_name && <b>in {country_name}</b>} offering {program_name && <b>{program_name} program in</b>} {course_name && <b>{course_name}</b>}
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

      <div className="my-10">
        {schools && (
          <div className="flex flex-wrap items-center justify-evenly gap-[30px]">
            {schools?.foundSchools?.map((school: School) => <Card key={school.id} {...school} />)}
          </div>
        )}
      </div>
      <div id="bookhere"></div>
      {/* pagination */}
      {handlePagination()}
    </div>
  );
};

export default SearchMain;
