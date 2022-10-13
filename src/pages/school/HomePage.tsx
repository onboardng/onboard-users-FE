import { useState } from "react";
import Icon from "../../components/Icons";
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
      {toggleMenu === "close" ? (
        <div className="md:hidden sticky top-0 z-50 pb-[31px] pt-[55px] bg-white md:bg-none flex items-center">
          <>
            <div className="px-[21px] cursor-pointer">
              <img src="/svgs/OnboardLogoBlue.svg" alt="logo" className="h-12 w-12" />
            </div>
            <div className="cursor-pointer  flex justify-end px-[21px] w-full  ">
              <div
                onClick={() => {
                  setToggleMenu && setToggleMenu("open");
                  setInitial && setInitial(true);
                }}
                className="hover:scale-110 z-50 transition ease-in-out w-12 h-12 flex flex-col items-end justify-center gap-2"
              >
                <Icon width={20} height={14} id="hamburger-icon" />
              </div>
            </div>
          </>
        </div>
      ) : (
        toggleMenu === "open" && <div className="h-[134px]"></div>
      )}
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
