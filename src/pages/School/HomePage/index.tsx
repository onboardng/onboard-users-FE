import { useState } from "react";
import Icon from "../../../components/Icons";
import AddSection from "../../../components/School/AdSection";
import Explore from "../../../components/School/Explore";
import Footer from "../../../components/School/Footer";
import Header from "../../../components/School/Header";
import NavMobile from "../../../components/School/HomeNavMobile";
import MobileNav from "../../../components/School/MobileNav";
import Subscribe from "../../../components/School/Subscribe";
import Update from "../../../components/School/Update";

const HomePage = () => {
  const [toggleMenu, setToggleMenu] = useState("close");
  const [initial, setInitial] = useState(false);

  return (
    <div className="bg-grey-600 relative">
      <MobileNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setInitial={setInitial} />
      <Header />
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
