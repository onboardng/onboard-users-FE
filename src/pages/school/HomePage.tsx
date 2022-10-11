import React, { useState } from "react";
import AddSection from "../../components/school/AdSection";
import Explore from "../../components/school/Explore";
import Header from "../../components/school/Header";
import NavMobile from "../../components/school/HomeNavMobile";
import Update from "../../components/school/Update";

const HomePage = () => {
  const [toggleMenu, setToggleMenu] = useState("close");

  return (
    <div className="bg-grey-600 relative">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Update />
      <Explore />
      <AddSection />
      <NavMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default HomePage;
