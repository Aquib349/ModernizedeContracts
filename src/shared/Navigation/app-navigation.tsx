import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoAngular } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

function AppNavigation() {
  const Apps = [
    { id: 1, name: "Adobe XD", icons: <SiAdobexd />, color: "text-purple-600" },
    { id: 1, name: "React", icons: <RiReactjsLine />, color: "text-blue-600" },
    { id: 1, name: "Figma", icons: <IoLogoFigma />, color: "text-orange-600" },
    { id: 1, name: "Angular", icons: <IoLogoAngular />, color: "text-red-500" },
    { id: 1, name: "HTML", icons: <SiHtml5 />, color: "text-red-600" },
    { id: 1, name: "CSS", icons: <FaCss3Alt />, color: "text-blue-600" },
  ];
  return (
    <>
      <div className="app-manager-component">
        <div className="main-app">
          <h1 className="font-medium text-md pb-4 px-2 text-white">
            Browse by apps
          </h1>

          {Apps.map((val) => (
            <div
              key={val.id}
              className="flex items-center gap-4 py-2 cursor-pointer px-2 hover:bg-gray-100 hover:rounded-md text-slate-300 hover:text-black"
            >
              <span className={`text-lg ${val.color}`}>{val.icons}</span>
              <span className="text-sm">{val.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppNavigation;
