import { Files, ListVideo } from "lucide-react";
import ResponseDetail from "./response-detail";
import { useState } from "react";
import axios from "axios";

interface TableProps {
  Record: any[];
}

const Table = ({ Record }: TableProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Needs Review":
        return "bg-blue-100 text-blue-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      case "NotStarted":
        return "bg-gray-100 text-gray-700";
      default:
        return "-";
    }
  };

  return (
    <div className="overflow-x-auto text-xs">
      <table className="table-auto w-full border-collapse border border-gray-200 text-left">
        <thead className="bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200">
          <tr>
            <th className="border border-gray-200 px-4 py-2 flex items-center space-x-1">
              <Files size={14} className="text-blue-400" />
              <span>Documents</span>
            </th>
            <th className="border border-gray-200 px-4 py-2">🔄 Ingestion</th>
            <th className="border border-gray-200 px-4 py-2">
              📝 Ingestion Summary
            </th>
            <th className="border border-gray-200 px-4 py-2">
              ✨ Classification
            </th>
            <th className="border border-gray-200 px-4 py-2">
              📋 Classification Summary
            </th>
            <th className="border border-gray-200 px-4 py-2">
              ⚙️ Record Setup
            </th>
            <th className="border border-gray-200 px-4 py-2">
              📄 Record Setup Summary
            </th>
          </tr>
        </thead>

        <tbody>
          {Record.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">
                {row.DocumentName}
              </td>
              <td className={`border border-gray-200 px-2 py-2 text-center`}>
                <span
                  className={`rounded-full text-[0.6rem] px-2 py-1 ${getStatusClass(
                    row.IngestionStatus
                  )}`}
                >
                  {row.IngestionStatus}
                </span>
              </td>
              <td className="px-2 py-2 italic flex items-center justify-between space-x-4 group">
                <span>View Summary</span>
                <ResponseDetail
                  RowKey={row.RowKey}
                  TriggerButton={
                    <ListVideo
                      size={12}
                      className="cursor-pointer text-white group-hover:text-black"
                    />
                  }
                />
              </td>
              <td className={`border border-gray-200 px-4 py-2 text-center`}>
                <span
                  className={`rounded-full text-[0.6rem] px-2 py-1 ${getStatusClass(
                    row.ClassificationStatus
                  )}`}
                >
                  {row.ClassificationStatus}
                </span>
              </td>
              <td className="border border-gray-200 px-4 py-2"></td>
              <td className={`border border-gray-200 px-4 py-2 text-center`}>
                <span
                  className={`rounded-full text-[0.6rem] px-2 py-1 ${getStatusClass(
                    row.RecordSetupStatus
                  )}`}
                >
                  {row.RecordSetupStatus}
                </span>
              </td>
              <td className="border border-gray-200 px-4 py-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="mt-4 text-gray-600">
        8/9 items in progress; 4/9 Needs Review; 2/9 Failed.
      </div> */}
    </div>
  );
};

export default Table;
