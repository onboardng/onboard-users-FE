import SearchFields from "./SearchFields";

const HeaderWidget = () => {
  return (
    <div className="absolute -bottom-64 md:-bottom-80 w-full px-12">
      <SearchFields />
    </div>
  );
};

export default HeaderWidget;
