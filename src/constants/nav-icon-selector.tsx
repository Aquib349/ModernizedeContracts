import { PiAmazonLogoBold } from "react-icons/pi";
import {
  Activity,
  BadgeAlert,
  FileCog,
  Files,
  FileText,
  GitCompareArrows,
  NotebookPen,
  ScrollText,
} from "lucide-react";
import { TbRefreshAlert } from "react-icons/tb";
import { BiError } from "react-icons/bi";

interface NavIconSelectorProps {
  icon: string;
}

function NavIconSelector({ icon }: NavIconSelectorProps) {
  function chooseIcon() {
    const name = icon.toLowerCase();
    switch (name) {
      case "summary":
        return <ScrollText size={20} />;
      case "documents":
        return <Files size={20} />;
      case "activity":
        return <Activity size={20} />;
      case "issues":
        return <BadgeAlert size={20} />;
      case "amendements":
        return <PiAmazonLogoBold className="text-xl" />;
      case "clauses":
        return <GitCompareArrows size={20} />;
      case "obligations":
        return <BiError className="text-xl" />;
      case "correspondance":
        return <TbRefreshAlert className="text-xl" />;
      case "compilance":
        return <FileCog size={20} />;
      case "notes":
        return <NotebookPen size={20} />;
      default:
        return <FileText size={20} />;
    }
  }

  return <>{chooseIcon()}</>;
}

export default NavIconSelector;
