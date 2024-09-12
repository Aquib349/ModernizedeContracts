import React, { useEffect, useState, MouseEvent } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  toggleModal: () => void;
  heading?: React.ReactNode;
  children: React.ReactNode;
  set_Width?: "small" | "medium" | "large";
}

const Modal: React.FC<ModalProps> = ({
  toggleModal,
  heading,
  children,
  set_Width = "small",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const originalLeft = document.body.style.left;
    const originalScrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${originalScrollY}px`;
    document.body.style.width = "100%";
    document.body.style.left = "0";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.body.style.left = originalLeft;
      window.scrollTo(0, originalScrollY);
    };
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="modal_component">
      <div
        className="modal inset-0 z-50 items-center justify-center fixed h-[100vh] overflow-scroll bg-black/60"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="flex justify-center mt-10">
          <div
            className={`modal-content relative rounded-sm bg-white pb-4 drop-shadow-xl ${
              set_Width === "medium"
                ? `max-w-4xl`
                : set_Width === "large"
                ? "max-w-8xl"
                : "max-w-xl"
            } w-11/12 animation-zoomIn`}
            style={{
              left: position.x,
              top: position.y,
              position: "relative",
            }}
          >
            <div
              className="modal-header px-2 py-3 border-b border-slate-400 cursor-move"
              onMouseDown={handleMouseDown}
            >
              <h2 className="text-xl text-start px-2 text-gray-800 font-medium">
                {heading}
              </h2>
              <div
                className="text-2xl absolute top-4 right-6 font-bold leading-8 cursor-pointer text-slate-500 hover:text-slate-700"
                onClick={toggleModal}
              >
                <X />
              </div>
            </div>
            <div className="text-start px-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
// return ReactDOM.createPortal(modalContent, document.body);

export default Modal;
