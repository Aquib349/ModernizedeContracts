import React, { useState } from "react";
import { ArrowUpCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const DocumentUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    setUploadProgress(droppedFiles.map(() => 40)); // Simulate progress
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      setUploadProgress(selectedFiles.map(() => 40)); // Simulate progress
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setUploadProgress(uploadProgress.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-auto p-6">
      {/* Drag and Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-blue-300 rounded-lg
         text-gray-500 cursor-pointer hover:border-indigo-500 pt-2 space-y-1"
      >
        <ArrowUpCircle size={40} className="text-indigo-500" />
        <p className="mt-2 text-sm">
          Drag and Drop file here or{" "}
          <label
            htmlFor="file-input"
            className="text-indigo-500 underline cursor-pointer"
          >
            Choose file
          </label>
        </p>
        <p className="text-xs text-gray-400">Supported formats: Pdf, docx</p>
        <p className="text-xs text-gray-400">Maximum size: 25MB</p>
        <Input
          id="file-input"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default DocumentUpload;
