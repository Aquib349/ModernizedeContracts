import ContractInfo from "./ContractInfo";
import { useContext } from "react";
import { ToggleMenuContext } from "@/context/SideMenuContext";

const ContractDetail = () => {
  const { isOpen } = useContext(ToggleMenuContext);

  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "pt-[3.8rem] pl-[4rem] pr-2" : "pt-14 p-2"
        }`}
      >
        <ContractInfo />
      </div>
    </>
  );
};

export default ContractDetail;
