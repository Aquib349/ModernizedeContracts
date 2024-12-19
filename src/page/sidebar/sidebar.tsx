import { useActiveContext } from "@/context/activeContext";
import {
  CalendarRange,
  ChevronRight,
  FileText,
  Folder,
  Minus,
  LayoutDashboard,
  ListEnd,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function GenerativeSidebar() {
  const { active, setActive } = useActiveContext();

  const [favoriteOpen, setFavoriteOpen] = useState(false);
  const [recentlyOpen, setRecentlyOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="generative-sidebar p-2 fixed">
      <div className="main">
        <div className="text-sm">
          {location.pathname === "/setting" ? (
            <div className="relative w-full">
              <div
                className={`flex items-center justify-between font-medium cursor-pointer w-full ${
                  active === "/favorite" ||
                  active === "/favorite/contracts" ||
                  active === "/favorite/documents" ||
                  active === "/favorite/recently-accessed"
                    ? "text-black"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setFavoriteOpen(!favoriteOpen);
                  setRecentlyOpen(false);
                  setActive("/favorite");
                }}
              >
                <div className="flex items-center gap-2">
                  <ListEnd className="w-4 h-4" />
                  Pipeline
                </div>
                <ChevronRight
                  className={`w-4 h-4 transform transition-transform duration-300  ${
                    favoriteOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div
                className={`w-[1.5px] bg-slate-100 absolute left-[0.4rem] transition-all duration-300`}
                style={{
                  height: (favoriteOpen ? 65 : 0) + "px",
                }}
              ></div>
              <div
                className={`transition-all duration-300 overflow-hidden text-slate-500 ${
                  favoriteOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="pl-1 mt-4 space-y-3">
                  <div className="relative w-full">
                    <div className="flex items-center justify-between cursor-pointer w-full">
                      <div
                        className={`flex items-center gap-1 font-medium ${
                          active === "/favorite/contracts" ? "text-black" : ""
                        }`}
                      >
                        <Minus className="text-slate-200" />
                        Document
                      </div>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div
                      className="flex items-center justify-between cursor-pointer w-full"
                      onClick={() => {
                        setRecentlyOpen(!recentlyOpen);
                        setActive("/favorite/recently-accessed");
                      }}
                    >
                      <div
                        className={`flex items-center gap-1 font-medium ${
                          active === "/favorite/recently-accessed"
                            ? "text-black"
                            : ""
                        }`}
                      >
                        <Minus className="text-slate-200" />
                        Renewal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : location.pathname === "/business-area" ? (
            <div>
              {/* BA Dashboard */}
              <div className="font-medium flex items-center gap-2 cursor-pointer">
                <LayoutDashboard className="w-4 h-4" />
                BA Dashboard
              </div>
              {/* pipeline */}
              <div className="relative w-full mt-2">
                <div
                  className={`flex items-center justify-between font-medium cursor-pointer w-full ${
                    active === "/pipeline/document" ||
                    active === "/pipeline/renewal"
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    setFavoriteOpen(!favoriteOpen);
                    setRecentlyOpen(false);
                    setActive("/pipeline");
                  }}
                >
                  <div className="flex items-center gap-2">
                    <ListEnd className="w-4 h-4" />
                    Pipeline
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transform transition-transform duration-300  ${
                      favoriteOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`w-[1.5px] bg-slate-100 absolute left-[0.4rem] transition-all duration-300`}
                  style={{
                    height: (favoriteOpen ? 65 : 0) + "px",
                  }}
                ></div>
                <div
                  className={`transition-all duration-300 overflow-hidden text-slate-500 ${
                    favoriteOpen ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="pl-1 mt-4 space-y-3">
                    <div className="relative w-full">
                      <div
                        className={`flex items-center gap-1 font-medium ${
                          active === "/business-area/pipeline"
                            ? "text-black"
                            : ""
                        }`}
                      >
                        <Minus className="text-slate-200" />
                        Document
                      </div>
                    </div>
                  </div>

                  {/* Recently Accessed */}
                  <div className="relative w-full pl-1">
                    <div className="flex items-center justify-between cursor-pointer w-full">
                      <div
                        className={`flex items-center gap-1 font-medium ${
                          active === "/favorite/recently-accessed"
                            ? "text-black"
                            : ""
                        }`}
                      >
                        <Minus className="text-slate-200" />
                        Renewal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`space-y-3 ${
                location.pathname.includes("/business-area")
                  ? "hidden"
                  : "block"
              } `}
            >
              {/* My Work */}
              <div className="font-medium">
                <Link
                  to="/"
                  className={`flex items-center gap-2 ${
                    active === "/" ? "text-black" : "text-gray-500"
                  }`}
                  onClick={() => setActive("/")}
                >
                  <FileText className="w-4 h-4" />
                  My Priority
                </Link>
              </div>

              {/* My Calendar */}
              <div className="font-medium">
                <Link
                  to="/calendar"
                  className={`flex items-center gap-2 ${
                    active === "/calendar" ? "text-black" : "text-gray-500"
                  }`}
                  onClick={() => setActive("/calendar")}
                >
                  <CalendarRange className="w-4 h-4" />
                  My Calendar
                </Link>
              </div>

              {/* My Favorite */}
              <div className="relative w-full">
                <div
                  className={`flex items-center justify-between font-medium cursor-pointer w-full ${
                    active === "/favorite" ||
                    active === "/favorite/contracts" ||
                    active === "/favorite/documents" ||
                    active === "/favorite/recently-accessed"
                      ? "text-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    setFavoriteOpen(!favoriteOpen);
                    setRecentlyOpen(false);
                    setActive("/favorite");
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4" />
                    My Favorite
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transform transition-transform duration-300  ${
                      favoriteOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`w-[1.5px] bg-slate-100 absolute left-[0.4rem] transition-all duration-300`}
                  style={{
                    height: (favoriteOpen ? 100 : 0) + "px",
                  }}
                ></div>
                <div
                  className={`transition-all duration-300 overflow-hidden text-slate-500 ${
                    favoriteOpen ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="pl-1 mt-4 space-y-3">
                    {/* My Contracts */}
                    <div className="relative w-full">
                      <div
                        className="flex items-center justify-between cursor-pointer w-full"
                        onClick={() => setActive("/favorite/contracts")}
                      >
                        <Link
                          to="/contracts"
                          className={`flex items-center gap-1 font-medium ${
                            active === "/favorite/contracts" ? "text-black" : ""
                          }`}
                        >
                          <Minus className="text-slate-200" />
                          My Contracts
                        </Link>
                      </div>
                    </div>

                    {/* My Documents */}
                    <div className="relative w-full">
                      <div
                        className="flex items-center justify-between cursor-pointer w-full"
                        onClick={() => setActive("/favorite/documents")}
                      >
                        <Link
                          to="/documents"
                          className={`flex items-center gap-1 font-medium ${
                            active === "/favorite/documents" ? "text-black" : ""
                          }`}
                        >
                          <Minus className="text-slate-200" />
                          My Documents
                        </Link>
                      </div>
                    </div>

                    {/* Recently Accessed */}
                    <div className="relative w-full">
                      <div
                        className="flex items-center justify-between cursor-pointer w-full"
                        onClick={() => {
                          setRecentlyOpen(!recentlyOpen);
                          setActive("/favorite/recently-accessed");
                        }}
                      >
                        <div
                          className={`flex items-center gap-1 font-medium ${
                            active === "/favorite/recently-accessed"
                              ? "text-black"
                              : ""
                          }`}
                        >
                          <Minus className="text-slate-200" />
                          Recently Accessed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={`${location.pathname.includes("/settings") ? "block" : "hidden"}`}></div>
          <div className={`${location.pathname.includes("/settings") ? "block" : "hidden"}`}></div>
          <div className={`${location.pathname.includes("/settings") ? "block" : "hidden"}`}></div>

        </div>
      </div>
    </div>
  );
}

export default GenerativeSidebar;
