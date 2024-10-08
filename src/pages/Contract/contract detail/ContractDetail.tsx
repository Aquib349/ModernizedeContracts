import ContractInfo from "./ContractInfo";
import { useContext, useState } from "react";
import { ToggleMenuContext } from "@/context/SideMenuContext";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import ContractSidebar from "./contract-detail-sidebar";
import GeneratedComponent from "./generated-component";
import ContractStatus from "../contract status/contract-status";

// Define the Section interface
interface Section {
  id: number;
  name: string;
}

const ContractDetail = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  const [sections, setSections] = useState<Section[]>([
    { id: 1, name: "Summary" },
  ]);

  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out overflow-y-auto pb-8 ${
          isOpen ? "pt-[3.8rem] pl-[4rem] pr-2" : "pt-14 p-2"
        }`}
      >
        <div className="px-2 text-lg fixed top-[3rem] bg-gray-50 py-3">
          <Breadcrumb>
            <BreadcrumbList className="font-medium">
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/contracts">Contracts</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-500">
                  Contract Detail
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ContractSidebar sections={sections} setSections={setSections} />
        <ContractInfo />

        <div className="mt-4 grid grid-cols-6 gap-2">
          <div className="col-span-4">
            {sections.map((section) => (
              <GeneratedComponent key={section.id} section={section} />
            ))}
          </div>
          <div className="col-span-2"><ContractStatus/></div>
        </div>
      </div>
    </>
  );
};

export default ContractDetail;
