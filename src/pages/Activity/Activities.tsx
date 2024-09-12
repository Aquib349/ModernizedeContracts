import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";

const Activities = () => {
  const { isOpen } = useContext(ToggleMenuContext);

  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "pt-[3.8rem] pl-[4rem]" : "pt-14 p-2"
        }`}
      >
        Activities
      </div>
    </>
  )
}

export default Activities
