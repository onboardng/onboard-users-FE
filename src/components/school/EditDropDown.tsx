import SearchFields from "./SearchFields";
import SearchSideBar from "./SearchSideBar";

const EditDropDown = ({ showFilter }: { showFilter: boolean }) => {
  return !showFilter ? (
    <div className="absolute w-[100vw] z-50 px-5">
      <SearchFields />{" "}
    </div>
  ) : (
    <div className="absolute md:hidden  w-[100vw] z-50 px-5">
      <SearchSideBar />
    </div>
  );
};

export default EditDropDown;
