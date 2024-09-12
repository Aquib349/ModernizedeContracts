import { Button } from "@/components/ui/button";
import { FcList } from "react-icons/fc";

const Heading = () => {
  return (
    <>
      <div className="search-component flex justify-between items-baseline pb-2">
        <div className="w-1/3 px-1 flex items-center gap-1">
          <span className="text-2xl">
            <FcList />
          </span>
          <p className="text-xl font-bold">Requests</p>
        </div>
        <div className="">
          <Button className="h-9">New Request</Button>
        </div>
      </div>
    </>
  );
};

export default Heading;
