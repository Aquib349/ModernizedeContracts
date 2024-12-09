import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext, useState } from "react";


import { Button } from "@/components/ui/button";
import SearchFilter from "../../../../components/search-filter/SearchFilter";
import RecordTable from "./RecordTable";



const Contract = () => {
  const { isOpen } = useContext(ToggleMenuContext);

  return (
    <>
      {/* heading and new-contract-record */}
      {/* <Heading /> */}

      <div className="main p-3 shadow text-sm bg-white relative">
        {/* search, dropdown-filter, filter */}
        <SearchFilter placeholder="search contracts"/>
        {/* <div className="space-x-1 pt-2">
          <Button
            variant="outline"
            className={`h-8 bg-gray-100 hover:bg-gray-100 ${
              table === "record" ? "bg-gray-50" : "bg-transparent"
            }`}
            onClick={() => setTable("record")}
          >
            Records
          </Button>
          <Button
            variant="outline"
            className={`h-8 bg-gray-100 hover:bg-gray-100 ${
              table === "document" ? "bg-gray-50" : "bg-transparent"
            }`}
            onClick={() => setTable("document")}
          >
            Documents
          </Button>
        </div> */}

        {/* all reqeuest table */}
        <RecordTable />
      </div>
    </>
  );
};

export default Contract;
