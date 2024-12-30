import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
const Modal = ({ toggleModal, heading, children, set_Width = "small", }) => {
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
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };
    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        }
    };
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    return (_jsx("div", { className: "modal_component", children: _jsx("div", { className: "modal inset-0 z-50 items-center justify-center fixed h-[100vh] overflow-scroll bg-black/60", onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, children: _jsx("div", { className: "flex justify-center mt-10", children: _jsxs("div", { className: `modal-content relative rounded-sm bg-white pb-4 drop-shadow-xl ${set_Width === "medium"
                        ? `max-w-4xl`
                        : set_Width === "large"
                            ? "max-w-8xl"
                            : "max-w-xl"} w-11/12 animation-zoomIn`, style: {
                        left: position.x,
                        top: position.y,
                        position: "relative",
                    }, children: [_jsxs("div", { className: "modal-header px-2 py-3 border-b border-slate-400 cursor-move", onMouseDown: handleMouseDown, children: [_jsx("h2", { className: "text-xl text-start px-2 text-gray-800 font-medium", children: heading }), _jsx("div", { className: "text-2xl absolute top-4 right-6 font-bold leading-8 cursor-pointer text-slate-500 hover:text-slate-700", onClick: toggleModal, children: _jsx(X, {}) })] }), _jsx("div", { className: "text-start px-3", children: children })] }) }) }) }));
};
// return ReactDOM.createPortal(modalContent, document.body);
export default Modal;
