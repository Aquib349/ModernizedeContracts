interface ColorStatus {
  status: string;
}

const StatusColor = ({ status }: ColorStatus) => {
  const len = status.length;
  const minWidth = Math.max(30, len * 8); // Adjust multiplier and minWidth as needed

  // Define background and text colors based on status
  const { backgroundColor, textColor } = (() => {
    switch (status.toLowerCase()) {
      case "expired":
        return { backgroundColor: "bg-gray-200", textColor: "text-gray-600" };
      case "signed":
        return { backgroundColor: "bg-blue-100", textColor: "text-blue-600" };
      case "up for renewal":
        return { backgroundColor: "bg-red-100", textColor: "text-red-600" };
      case "failed":
        return { backgroundColor: "bg-red-100", textColor: "text-red-600" };
      case "active":
        return { backgroundColor: "bg-green-100", textColor: "text-green-600" };
      case "success":
        return { backgroundColor: "bg-green-100", textColor: "text-green-600" };
      case "awaiting":
        return {
          backgroundColor: "bg-orange-100",
          textColor: "text-orange-600",
        };
      case "processing":
        return {
          backgroundColor: "bg-orange-100",
          textColor: "text-orange-600",
        };
      default:
        return { backgroundColor: "bg-cyan-50", textColor: "text-cyan-500" };
    }
  })();

  return (
    <div
      className={`${backgroundColor} ${textColor} rounded flex justify-center items-center text-xs h-5 font-bold`}
      style={{ width: `${minWidth}px` }}
    >
      {status}
    </div>
  );
};

export default StatusColor;
