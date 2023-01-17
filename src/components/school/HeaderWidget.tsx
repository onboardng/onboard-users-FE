import React from "react";
import SearchFields from "./SearchFields";

const HeaderWidget = () => {
  return (
    <div className="absolute -bottom-64 md:-bottom-80 w-full md:px-12">
      <SearchFields />
    </div>
  );
};

export default HeaderWidget;
