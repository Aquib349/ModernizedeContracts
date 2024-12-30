import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
const DocumentUpload = () => {
    const [files, setFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState([]);
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
        setUploadProgress(droppedFiles.map(() => 40)); // Simulate progress
    };
    const handleFileChange = (e) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);
            setUploadProgress(selectedFiles.map(() => 40)); // Simulate progress
        }
    };
    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
        setUploadProgress(uploadProgress.filter((_, i) => i !== index));
    };
    return (_jsx("div", { className: "mx-auto p-6", children: _jsxs("div", { onDrop: handleDrop, onDragOver: (e) => e.preventDefault(), className: "flex flex-col items-center justify-center h-40 border-2 border-dashed border-blue-300 rounded-lg\r\n         text-gray-500 cursor-pointer hover:border-indigo-500 pt-2 space-y-1", children: [_jsx(ArrowUpCircle, { size: 40, className: "text-indigo-500" }), _jsxs("p", { className: "mt-2 text-sm", children: ["Drag and Drop file here or", " ", _jsx("label", { htmlFor: "file-input", className: "text-indigo-500 underline cursor-pointer", children: "Choose file" })] }), _jsx("p", { className: "text-xs text-gray-400", children: "Supported formats: Pdf, docx" }), _jsx("p", { className: "text-xs text-gray-400", children: "Maximum size: 25MB" }), _jsx(Input, { id: "file-input", type: "file", multiple: true, onChange: handleFileChange, className: "hidden" })] }) }));
};
export default DocumentUpload;
