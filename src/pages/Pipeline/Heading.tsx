import { Button } from "@/components/ui/button";
import { BsBricks } from "react-icons/bs";

const Heading = () => {
  return (
    <>
      <div className="search-component flex justify-between items-baseline pb-2">
        <div className="w-1/3 px-1 flex items-center gap-1">
          <span className="text-xl text-blue-500">
            <BsBricks />
          </span>
          <p className="text-xl font-bold">Pipeline</p>
        </div>
        <div className="">
          <Button className="h-9">New Contract Record</Button>
        </div>
      </div>
    </>
  );
};

export default Heading;
