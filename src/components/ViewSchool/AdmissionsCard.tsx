import React from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../Icons";

const AdmissionsCard = () => {
  const { id } = useParams();

  return (
    <div className="my-5 bg-white relative">
      <div className="md:px-10 px-5 pt-5">
        <div className="flex w-full justify-between items-center border-b-[1px] pb-5">
          <div className="">
            <p className="text-[16px] leading-[25.6px] font-medium md:text-[20px] md:leading-[32px]">Bachelor of Science in Marketing</p>
            <p className="md:text-[16px] md:leading-[25.6px] text-[14px] leading-[22.4px] text-[#8B8BA4]">Application closes on Jan 1, 2023</p>
          </div>
          <Link
            to={`/schools/${id}/apply`}
            className="tab:hidden col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto"
          >
            <p className="text-center">Apply Now</p>
            <Icon width={24} height={24} id="arrow-right-icon" />
          </Link>
        </div>
      </div>
      <p className="text-[14px] leading-[22.4px] text-[#8B8BA4] p-5 md:px-10">
        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text
        seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
      </p>
      <div className="py-3 px-5 md:hidden">
        <Link
          to={`/schools/${id}/apply`}
          className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto"
        >
          <p className="text-center">Apply Now</p>
          <Icon width={24} height={24} id="arrow-right-icon" />
        </Link>
      </div>
    </div>
  );
};

export default AdmissionsCard;
