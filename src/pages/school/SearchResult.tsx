import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Icon from "../../components/Icons";
import AddSection from "../../components/school/AdSection";
import EditDropDown from "../../components/school/EditDropDown";
import Footer from "../../components/school/Footer";
import Navbar from "../../components/school/Navbar";
import SearchMain from "../../components/school/SearchMain";
import SearchSideBar from "../../components/school/SearchSideBar";
import Update from "../../components/school/Update";

const SearchResult = () => {
  const [edit, showEdit] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (matches) {
      setShowFilter(false);
    }
  }, [matches]);

  return (
    <div className="bg-grey-600 relative">
      <div className="w-full"></div>
      <Navbar />
      <div className="flex gap-5 md:mt-[32px] mb-[30px] relative">
        {(edit || showFilter) && (
          <>
            <div className="flex absolute justify-end w-full pr-8 -mt-7">
              <div
                onClick={() => {
                  setShowFilter(false);
                  showEdit(false);
                }}
                className="w-fit hidden md:flex cursor-pointer gap-2 items-center"
              >
                <Icon width={14} height={14} id="close-icon" /> <p>Close</p>
              </div>
              <div
                onClick={() => {
                  showEdit(false);
                  setShowFilter(false);
                }}
                className="md:hidden justify-center flex cursor-pointer -mt-4 rounded-full bg-white h-10 w-10 gap-2 items-center"
              >
                <Icon width={14} height={14} id="close-green-icon" /> <p className="hidden md:block">Close</p>
              </div>
            </div>
            <EditDropDown showFilter={showFilter} />{" "}
          </>
        )}
        <SearchSideBar showFilter={showFilter} />
        <SearchMain showEdit={showEdit} setShowFilter={setShowFilter} />
      </div>
      <Update imgSrc={"./static/images/school2.png"} />
      <AddSection />
      <Footer />
    </div>
  );
};

export default SearchResult;
