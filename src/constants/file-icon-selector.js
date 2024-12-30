import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { BiSolidFileDoc } from "react-icons/bi";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { FileText } from "lucide-react";
function IconSelector({ icon }) {
    const name = icon === null || icon === void 0 ? void 0 : icon.split(".")[1];
    function chooseIcon() {
        switch (name) {
            case "pdf":
                return _jsx(BsFillFileEarmarkPdfFill, { className: "text-red-600 text-lg" });
            case "doc":
            case "word":
            case "docx":
                return _jsx(BiSolidFileDoc, { className: "text-blue-600 text-xl" });
            case "exe":
            case "excel":
                return _jsx(BsFileEarmarkExcelFill, { className: "text-green-600 text-lg" });
            default:
                return _jsx(FileText, { size: 18 });
        }
    }
    return _jsx(_Fragment, { children: chooseIcon() });
}
export default IconSelector;
