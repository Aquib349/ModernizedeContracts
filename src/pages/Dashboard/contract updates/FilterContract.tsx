import DropdownItem from "@/components/select dropdown/DropdownItem";
import { Button } from "@/components/ui/button";
import { FaRegCalendar } from "react-icons/fa";

const FilterContract = () => {
  return (
    <>
      <div className="filer pt-4 flex justify-between items-center">
        <div className="flex gap-x-2">
          <DropdownItem
            className="relative w-[140px] text-xs font-medium"
            placeholder="Last 30 days"
            icon={<FaRegCalendar />}
            selected="Last 30 days"
            DataContent={[]}
          />
          <DropdownItem
            className="w-[100px] text-xs font-medium"
            placeholder="Filter By"
            icon={<></>}
            selected="Filter By"
            DataContent={[]}
          />
        </div>
        <div className="flex items-center">
          <p className="text-xs font-medium pr-2">Page 1 of 4</p>
          <Button className="h-8 w-2 mx-0.5 bg-transparent border text-md text-black flex justify-center items-center hover:bg-gray-100">
            &lt;
          </Button>
          <Button className="h-8 w-2 mx-0.5 bg-transparent border text-md text-black flex justify-center items-center hover:bg-gray-100">
            &gt;
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterContract;
