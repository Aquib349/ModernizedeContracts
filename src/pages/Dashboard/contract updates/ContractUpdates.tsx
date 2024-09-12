import { Button } from "@/components/ui/button";
import { ContractUpdateHeadings } from "@/constants/custom data/CustomData";
import { useState } from "react";
import FilterContract from "./FilterContract";
import ContractTable from "./ContractTable";

const ContractUpdates = () => {
  const [ActiveHead, setActiveHead] = useState("Total Contracts");
  return (
    <>
      <div className="contract-updates">
        <div className="main text-sm bg-white shadow p-3 rounded-md mt-3">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Recent Contracts</h1>
            <Button className="h-8 text-sm">Create Contracts</Button>
          </div>
          <div className="pt-6 pb-1 border-b flex justify-between items-center text-sm font-semibold">
            {ContractUpdateHeadings.map((val) => (
              <div
                key={val.id}
                className={`relative cursor-pointer ${
                  ActiveHead.toLowerCase() === val.name.toLowerCase()
                    ? "text-blue-600"
                    : ""
                }`}
              >
                <p onClick={() => setActiveHead(val.name)}>{val.name}</p>
                {ActiveHead.toLowerCase() === val.name.toLowerCase() && (
                  <div className="absolute top-[1.4rem] h-[2px] w-full bg-blue-500"></div>
                )}
              </div>
            ))}
          </div>
          <FilterContract/>
          <ContractTable/>
        </div>
      </div>
    </>
  );
};

export default ContractUpdates;
