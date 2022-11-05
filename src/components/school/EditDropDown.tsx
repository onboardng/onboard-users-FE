import SearchFields from "./SearchFields";
import SearchSideBar from "./SearchSideBar";

const EditDropDown = ({ showFilter, setEdit }: { showFilter: boolean; setEdit?: Function }) => {
  return !showFilter ? (
    <div className="absolute w-[100vw] z-50 px-5">
      <SearchFields setEdit={setEdit} />{" "}
    </div>
  ) : (
    <div className="absolute md:hidden  w-[100vw] z-50 px-5">
      <SearchSideBar />
    </div>
  );
};

export default EditDropDown;
