import ReactPixel from "react-facebook-pixel";
import React, { useState } from "react";

import NavMobile from "../../../components/school/HomeNavMobile";
import AddSection from "../../../components/school/AdSection";
import Subscribe from "../../../components/school/Subscribe";
import MobileNav from "../../../components/school/MobileNav";
import Explore from "../../../components/school/Explore";
import Footer from "../../../components/school/Footer";
import Header from "../../../components/school/Header";
import Update from "../../../components/school/Update";
import Apply from "../../../components/school/Apply";

const HomePage = () => {
  const [toggleMenu, setToggleMenu] = useState("close");
  const [initial, setInitial] = useState(false);
  ReactPixel.pageView()

  return (
    <div className="bg-grey-600 relative">
      <MobileNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setInitial={setInitial} />
      <Header />
      <Apply />
      <Update imgSrc="/static/images/Update.png" />
      <Explore />
      <AddSection />
      <Subscribe />
      <NavMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} initial={initial} />
      <Footer />
    </div>
  );
};

export default HomePage;
