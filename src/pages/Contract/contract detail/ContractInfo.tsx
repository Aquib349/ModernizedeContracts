import {
  Banknote,
  Edit,
  FolderOpenDot,
  Landmark,
  UsersRound,
  Tags,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Modal from "@/components/modal/Modal";

const ContractInfo = () => {
  const Labels = [1];
  const [showModal, setShowModal] = useState(false);
  const [LabelMode, setLabelMode] = useState("");

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <>
      {showModal && (
        <Modal
          heading={LabelMode}
          toggleModal={toggleModal}
          set_Width={"medium"}
        >
          Hi
        </Modal>
      )}

      <div className="px-8 py-4 border mt-8 bg-white rounded ml-[5rem]">
        <div className="flex items-center gap-2">
          <div title="Folder Open">
            <FolderOpenDot size={40} />
          </div>
          <h4 className="text-2xl font-medium">
            1000 records with 14 column 7th JUNE 2024
          </h4>
        </div>
        <p className="mb-3 mt-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          This Sales Agreement is between MED-EL Corporation and University
          Hospitals Health System, Inc. for the purchase of specific Hearing
          Technology Solutions referred to as 'Products,' which includes
          products, related services, and the rights transferred by MED-EL in
          performance of this Agreement"
        </p>
        <div className="flex justify-between items-center pt-1">
          <div className="text-sm flex items-center gap-1">
            <div title="Contract Owner">
              <UsersRound size={16} />
            </div>
            <p>Hariharan N</p>
          </div>
          <div className="text-sm flex items-center gap-1">
            <div title="Counterparty">
              <Landmark size={16} />
            </div>
            <p>University Hospital Health System Inc.</p>
          </div>
          <div className="text-sm flex items-center gap-1">
            <div title="Contract Value">
              <Banknote size={16} />
            </div>
            <p>$0.00</p>
          </div>
        </div>
        <div className="flex items-center pt-4">
          {Labels.length > 0 ? (
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="rounded border border-indigo-400 font-medium text-indigo-800 bg-indigo-100"
              >
                Secondary
                <button
                  type="button"
                  className="inline-flex items-center p-0.5 ms-2 text-sm text-indigo-600 bg-transparent rounded-sm
              hover:text-indigo-900 hover:bg-indigo-400"
                  data-dismiss-target="#badge-dismiss-indigo"
                  aria-label="Remove"
                >
                  <X size={12} />
                </button>
              </Badge>
              <div
                title="Edit Labels"
                onClick={() => {
                  setLabelMode("Edit Labels");
                  setShowModal(!showModal);
                }}
              >
                <Edit size={20} />
              </div>
            </div>
          ) : (
            <div
              className="flex items-center cursor-pointer"
              title="Add Labels"
              onClick={() => {
                setLabelMode("Add Labels");
                setShowModal(!showModal);
              }}
            >
              <Tags size={20} />
              <p className="text-sm pl-2">Add Labels</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContractInfo;
