import SearchFilter from "../../../../components/search-filter/SearchFilter";
import RecordTable from "./RecordTable";

const Contract = () => {
  return (
    <>
      <div className="text-sm space-y-5 relative">
        <SearchFilter placeholder="search contracts" />
        <RecordTable />
      </div>
    </>
  );
};

export default Contract;
