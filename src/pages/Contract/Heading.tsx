import { Button } from "@/components/ui/button";
import { ReceiptText } from "lucide-react";

const Heading = () => {
  return (
    <>
      <div className="search-component flex justify-between items-baseline pb-2">
        <div className="w-1/3 px-1 flex items-center gap-2">
          <span className="text-xl text-blue-500">
            <ReceiptText size={20} />
          </span>
          <p className="text-xl font-bold">Contracts</p>
        </div>
        <div className="">
          <Button className="h-9">Add Contract Record</Button>
        </div>
      </div>
    </>
  );
};

export default Heading;
