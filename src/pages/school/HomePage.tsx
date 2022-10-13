import React, { useState } from "react";
import AddSection from "../../components/school/AdSection";
import Explore from "../../components/school/Explore";
import Footer from "../../components/school/Footer";
import Header from "../../components/school/Header";
import NavMobile from "../../components/school/HomeNavMobile";
import Subscribe from "../../components/school/Subscribe";
import Update from "../../components/school/Update";

const HomePage = () => {
  const [toggleMenu, setToggleMenu] = useState("close");
  const [initial, setInitial] = useState(false);

  return (
    <div className="bg-grey-600 relative">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setInitial={setInitial} />
      <Update imgSrc="/static/images/Update.png" />
      <Explore />
      <AddSection />
      <NavMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} initial={initial} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
