import toast from "react-hot-toast";
const defaultStyle = {
    background: "black",
    color: "white",
    fontSize: "0.8rem",
};
// Toast Service to show toast
export const toastService = {
    showToast(message, type, options) {
        const mergedOptions = Object.assign(Object.assign({}, options), { style: Object.assign(Object.assign({}, defaultStyle), ((options === null || options === void 0 ? void 0 : options.style) || {})) });
        switch (type) {
            case "success":
                toast.success(message, mergedOptions);
                break;
            case "error":
                toast.error(message, mergedOptions);
                break;
            case "loading":
                toast.loading(message, mergedOptions);
                break;
            default:
                toast(message, mergedOptions);
        }
    },
    // function to dismiss toast
    dismissToast() {
        toast.dismiss();
    },
};
