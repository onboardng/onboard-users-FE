import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useHttpRequest } from "../../hooks";
import PageLoader from "../Loader/PageLoader";
import Icon from "../Icons";
import { School } from "../../interfaces";

const url = process.env.REACT_APP_BACKEND_API

const Explore = () => {
  const [universities, setUniversities] = useState<Array<School>>([]);
  const navigate = useNavigate();

  const {loading, sendRequest} = useHttpRequest()

  const getAllUniverisities = async() => {
    try {
      const data = await sendRequest(`${url}/university/all?limit=10&page=1`, "GET", null, {
        "Content-Type": "application/json"
      })
      if(!data || data === undefined) return
      const {data:{universities:{data:{rows}}}} = data
      setUniversities(rows)
    } catch (error) {}
  }

  useEffect(() => {
    getAllUniverisities()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  if (loading) return <PageLoader />

  return (
    <div className="bg-white mt-[50px]">
      <div className=" w-full p-[20px] md:p-[50px] text-center flex flex-col justify-center items-center">
        <h4 className="text-[20px] md:text-[28px]  font-medium md:leading-[39px]">Top schools around the world.</h4>
        <p className="text-[16px] md:text-[20px] md:leading-[32px] mt-2.5 mb-12">Explore with us.</p>
        <div className="w-full flex flex-wrap items-center justify-center gap-[15px]">
          {universities?.slice(0, 4).map((school, index) => (
            <div className="flex flex-col justify-center items-center gap-5 relative" key={index}>
              <div className="flex gap-4 justify-center items-center bg-filter bg-no-repeat bg-cover bg-blend-multiply w-[250px] relative rounded-[6px] overflow-hidden ">
                <img src={school.pictures?.[0] || "/static/images/school.png"} alt="card" className="w-full h-[150px] opacity-50 rounded-[6px]" />
                <h5 className="text-[16px] md:text-[24px] absolute text-white left-3 bottom-[30px] capitalize text-left">{school.name}</h5>
                <div className="absolute flex text-white gap-2 items-center bottom-[15px] left-3">
                  <Icon width={12} height={14} id="location-icon-white" />
                  <p className="text-[10px]">{school?.address}, {school?.country}</p>
                </div>
              </div>
              <Link 
                to={`/schools/${school.id}`}
                className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center w-[250px] h-[50px]"
              >
                View School Profile
              </Link>
            </div>
          ))}
        </div>
        <button onClick={() => navigate(`/search`)} className="col-span-2 justify-center  mt-12 flex gap-1 font-medium rounded-md items-center px-[20px] py-[17px] w-full md:w-auto">
          <p className="text-center">Load more</p>
          <Icon width={24} height={24} id="arrow-right-black-icon" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
