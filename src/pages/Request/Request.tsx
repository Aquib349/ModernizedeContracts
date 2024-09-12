import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import Heading from "./Heading";
import SearchFilter from "./SearchFilter";
import RequestsTable from "./RequestsTable";

const Request = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "pt-[3.8rem] pl-[4rem] pr-2" : "pt-14 p-2"
        }`}
      >
        {/* heading and new-request-button */}
        <Heading />

        <div className="main p-3 shadow rounded-md text-sm bg-white relative">
          {/* search, dropdown-filter, filter */}
          <SearchFilter />

          {/* all reqeuest table */}
          <RequestsTable />
        </div>
      </div>
    </>
  );
};

export default Request;
