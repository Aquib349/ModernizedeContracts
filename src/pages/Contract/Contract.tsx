import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext, useState } from "react";
import Heading from "./Heading";
import SearchFilter from "./SearchFilter";
import { Button } from "@/components/ui/button";
import RecordTable from "./RecordTable";
import DocumentTable from "./Document-table";

const Contract = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  const [table, setTable] = useState("record");

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
          <SearchFilter table={table}/>
          <div className="space-x-1 pt-2">
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
          </div>

          {/* all reqeuest table */}
          {table === "record" ? <RecordTable /> : <DocumentTable />}
        </div>
      </div>
    </>
  );
};

export default Contract;
