import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icons";

import { FiChevronLeft } from 'react-icons/fi'

const Goback = ({ isback, track }: { isback?: boolean, track?: boolean }) => {
  const navigate = useNavigate();
  return (
    <aside className="tab:px-4 md:mx-12 py-5 tab:sticky tab:top-0 tab:bg-white tab:z-[10]">
      <div className={`${isback ? "flex" : "md:hidden"} ${track && "justify-between items-center"}`}>
        <span className="flex items-center cursor-pointer" onClick={() => navigate(-1)}>
          <FiChevronLeft />
          <span className="tab:hidden px-3">Back to school</span>
        </span>
        {track && <div className="flex tab:hidden" >
          <button
              className={`text-primary border-primary border-[1px] rounded-[4px] px-4 py-3 flex mx-5`}
            >
              <Icon id="green-mail-icon" height={24} width={24} />
              <p className="px-1" >Send to mail</p>
            </button>
            <button
              className={`text-primary border-primary border-[1px] rounded-[4px] px-4 py-3 flex`}
            >
              <Icon id="download-icon" height={24} width={24} />
              <p className="px-1" >Download as PDF</p>
            </button>
        </div>}
      </div>
    </aside>
  );
};

export default Goback;
