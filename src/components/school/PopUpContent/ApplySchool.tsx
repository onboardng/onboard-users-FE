import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "../../Icons";

const ApplySchool = ({ close }: { close: () => void }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h4 className="text-[16px] md:text-[24px] md:leading-[38px] font-semibold mb-4">Bachelor of Science in Marketing</h4>
      <p className="text-[14px] md:leading-[22.4px] text-[#8B8BA4] pb-4 border-b-[1px]">
        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text
        seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
      </p>
      <div className="tab:flex w-full ">
        <div className="flex flex-col py-4 gap-3 border-b w-full">
          <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium tab:py-1">
            <Icon id="clock-icon" height={24} width={24} />
            <span className="px-2">Course Duration: 4 years</span>
          </p>
          <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium tab:py-1">
            <Icon id="calendar-icon" height={24} width={24} />
            <span className="px-2">Application opens: currently</span>
          </p>
          <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium tab:py-1">
            <Icon id="calendar-icon" height={24} width={24} />
            <span className="px-2">Application closes: Jan 1, 2023</span>
          </p>
          <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium tab:py-1">
            <Icon id="money-bill-icon" height={24} width={24} />
            <span className="px-2">Estimated Admission Fee: ₦10,000</span>
          </p>
        </div>
      </div>
      <div className=" w-full flex tab:justify-center justify-end mt-[30px]">
        <div
          onClick={async () => {
            await close();
            navigate(`/schools/${id}/apply`);
          }}
          className="col-span-2 focus:outline-none justify-center cursor-pointer bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px]"
        >
          <p className="text-center">Apply </p>
          <Icon width={24} height={24} id="arrow-right-icon" />
        </div>
      </div>
    </>
  );
};

export default ApplySchool;
