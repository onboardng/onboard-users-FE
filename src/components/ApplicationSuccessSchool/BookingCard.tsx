import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Icon from "../Icons";

const BookingCard = ({ track }: { track?: boolean }) => {
  const {
    state: { data },
  } = useLocation();
  const handleCopy = () => {
    navigator.clipboard.writeText("AB-12345678");
    toast.info("Copied Successfully", {
      position: toast.POSITION.TOP_CENTER,
      progressStyle: {
        backgroundColor: "#6FA7B4",
      },
      icon: false,
    });
  };

  return (
    <div className="bg-white md:rounded-[40px] rounded-[10px] md:mr-10 lg:my-5">
      <div className="relative">
        <img alt="success" src={`${process.env.PUBLIC_URL}/svgs/Image.svg`} className="md:rounded-t-[40px] rounded-t-[10px] w-full" />
        {track && (
          <div
            className={`absolute z-[1] w-full h-full bg-[#00000060] top-0 md:rounded-t-[40px] rounded-t-[10px] flex items-center justify-center text-white font-medium text-[24px] leading-[38.4px] `}
          >
            Application Successful
          </div>
        )}
      </div>
      <div className="px-5 md:px-10">
        <div className="text-center md:pb-3 pt-5">
          <p className="text-[16px] leading-[25.6px]">Application ID</p>
          <div className="flex md:flex-row flex-col justify-center items-center py-1">
            <h3 className="font-semibold text-[28px] leading-[39.2px] md:mr-3">{data?.application.tracking_id}</h3>
            <span onClick={handleCopy} className="flex justify-between items-center cursor-pointer">
              <Icon id="copy-icon" height={24} width={24} /> <span className="pl-1 text-primary font-medium text-[14px] leading-[22.4px]">Copy</span>
            </span>
          </div>
          {track && (
            <p className="text-[16px] leading-[25.6px] text-[#8B8BA4] py-1">
              An Email and a Text message has been sent to you containing your application ID
            </p>
          )}
        </div>
        <div className="text-center pb-5 pt-2">
          <h4 className="font-medium text-[24px] leading-[38.4px] capitalize">{data?.application.school_name}</h4>
          <p className="flex text-[16px] leading-[25.6px] justify-center capitalize items-center text-[#8B8BA4] py-2">
            <Icon id="graduation-icon2" height={24} width={24} />
            <span className="px-2">Bachelor of {data?.application?.course_name}</span>
          </p>
          <div className="tab:flex tab:justify-center">
            <div>
              <div className="flex flex-col md:justify-around  md:flex-row md:py-1">
                <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1">
                  <Icon id="clock-icon" height={24} width={24} />
                  <span className="px-2">Course Duration: 4 years</span>
                </p>
                <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1">
                  <Icon id="calendar-icon" height={24} width={24} />
                  <span className="px-2">Application opens: currently</span>
                </p>
              </div>
              <div className="flex flex-col md:justify-around  md:flex-row md:py-1">
                <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1">
                  <Icon id="calendar-icon" height={24} width={24} />
                  <span className="px-2">Application closes: Jan 1, 2023</span>
                </p>
                <p className="flex text-[14.5px] leading-[22.4px] md:text-[16px] md:leading-[25.6px] justify-start items-center font-medium md:w-1/2 tab:py-1">
                  <Icon id="money-bill-icon" height={24} width={24} />
                  <span className="px-2">Estimated Admission Fee: ₦10,000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
