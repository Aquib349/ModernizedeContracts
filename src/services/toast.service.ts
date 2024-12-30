import toast, { ToastOptions } from "react-hot-toast";

const defaultStyle: React.CSSProperties = {
  background: "black",
  color: "white",
  fontSize: "0.8rem",
};

// Toast Service to show toast
export const toastService = {
  showToast(
    message: string,
    type: "loading" | "success" | "error",
    options?: ToastOptions
  ) {
    const mergedOptions: ToastOptions = {
      ...options,
      style: { ...defaultStyle, ...(options?.style || {}) },
    };

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
