import React, { useState } from "react";
import { Tags, Edit } from "lucide-react";
import ToolTip from "@/components/tooltip/Tooltip";
import Modal from "@/components/modal/Modal";

const Label: React.FC = () => {
  const Labels = [];
  const [showModal, setShowModal] = useState<boolean>(false);
  const [labelMode, setLabelMode] = useState<string>("");

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      {showModal && (
        <Modal toggleModal={toggleModal} set_Width="medium" heading={labelMode}>
          Hi
        </Modal>
      )}
      <div className="labels pt-2 flex items-center">
        <span
          id="badge-dismiss-indigo"
          className={`inline-flex items-center px-2 py-0.5 me-2 text-xs border border-indigo-400 font-medium text-indigo-800 bg-indigo-200 rounded ${
            Labels.length > 0 ? "" : "hidden"
          }`}
        >
          Indigo
          <button
            type="button"
            className="inline-flex items-center p-1 ms-2 text-sm text-indigo-600 bg-transparent rounded-sm hover:text-indigo-900 hover:bg-indigo-400"
            data-dismiss-target="#badge-dismiss-indigo"
            aria-label="Remove"
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
        <span className="text-xl">
          <ToolTip
            className="bg-transparent text-slate-500 hover:bg-transparent"
            hoverItem={
              Labels.length > 0 ? (
                <Edit
                  size={20}
                  className="cursor-pointer"
                  onClick={() => {
                    setLabelMode("Edit Labels");
                    toggleModal();
                  }}
                />
              ) : (
                <div
                  className="text-sm cursor-pointer"
                  onClick={() => {
                    setLabelMode("Add Labels");
                    toggleModal();
                  }}
                >
                  <Tags size={20} />
                  {/* <span>Add Label</span> */}
                </div>
              )
            }
            textContent={Labels.length > 0 ? "Edit labels" : "Add Labels"}
          />
        </span>
      </div>
    </>
  );
};

export default Label;
