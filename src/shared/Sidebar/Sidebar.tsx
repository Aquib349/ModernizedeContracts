import { sideItem } from "@/constants/custom data/CustomData";
import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="relative">
        <div
          className={`fixed pt-10 mt-3 transition-all duration-500 ease-in-out border-r-2 border-slate-200 ${
            isOpen ? "h-[100vh] overflow-hidden" : "h-0"
          } overflow-hidden`}
        >
          {sideItem.map((val, index) => {
            const isActive =
              location.pathname === val.links ||
              (location.pathname.includes("contract-detail") &&
                val.links === "/contracts")
                ? "contracts"
                : "";

            return (
              <div
                key={val.id}
                title={val.name}
                className={`flex flex-col my-3 text-slate-500 hover:text-blue-600 cursor-pointer
              transition-all duration-500 ease-in-out transform mx-2
              ${
                isOpen
                  ? `translate-y-0 opacity-100 delay-${index * 100}`
                  : "-translate-y-10 opacity-0"
              }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => {
                  navigate(val.links);
                }}
              >
                <div
                  className={`${
                    isActive
                      ? "border-2 border-blue-800 p-0.5 rounded-md"
                      : "border-2 border-white/10 rounded-md p-0.5"
                  }`}
                >
                  <span
                    className={`text-xl rounded-md ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        : "bg-blue-500"
                    } p-1.5 text-white shadow flex justify-center items-center ${
                      isActive ? "text-white font-bold" : ""
                    }`}
                  >
                    {val.icon}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
