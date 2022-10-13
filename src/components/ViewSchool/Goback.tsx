import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icons";

const Goback = ({ isback }: { isback?: boolean }) => {
  const navigate = useNavigate();
  return (
    <aside className="tab:px-4 md:mx-12 py-5 tab:sticky tab:top-0 tab:bg-white tab:z-[10]">
      <div className={`${isback ? "flex" : "md:hidden"}`}>
        <span className="flex cursor-pointer" onClick={() => navigate(-1)}>
          <Icon id="arrow-left-icon" width={24} height={24} />
          <span className="tab:hidden px-3">Back to school</span>
        </span>
      </div>
    </aside>
  );
};

export default Goback;
