import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import Heading from "./Heading";
import SearchFilter from "./SearchFilter";
import RecordTable from "./RecordTable";
import { Button } from "@/components/ui/button";

const Pipeline = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "pt-[3.8rem] pl-[4rem] pr-2" : "pt-14 p-2"
        }`}
      >
        {/* heading and new-contract-record */}
        <Heading />

        <div className="main p-3 shadow rounded-md text-sm bg-white relative">
          {/* search, dropdown-filter, filter */}
          <SearchFilter />
          <div className="space-x-1 pt-2">
            <Button
              variant="outline"
              className="h-8 bg-gray-100 hover:bg-gray-100"
            >
              Records
            </Button>
            <Button
              variant="outline"
              className="h-8 bg-transparent hover:bg-gray-100"
            >
              Documents
            </Button>
          </div>

          {/* all reqeuest table */}
          <RecordTable />
        </div>
      </div>
    </>
  );
};

export default Pipeline;
