import DropdownItem from "@/components/select dropdown/DropdownItem";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  return (
    <>
      <div className="filter-component">
        <div className="main flex gap-x-2">
          {/* dropdown filter */}
          <DropdownItem
            className="w-[180px]"
            placeholder="Recently Updated"
            icon={<></>}
            selected="Recently Updated"
            DataContent={[]}
          />

          {/* normal filter */}
          <div className="border flex justify-center items-center text-xl p-1 rounded-md cursor-pointer text-gray-500">
            <HiAdjustmentsHorizontal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
