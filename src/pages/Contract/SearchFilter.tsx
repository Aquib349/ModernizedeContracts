import DropdownItem from "@/components/select dropdown/DropdownItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { LuRotateCw } from "react-icons/lu";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import ToolTip from "@/components/tooltip/Tooltip";
import { Eye, SquareArrowDown } from "lucide-react";
import QuickViews from "./QuickViews";
import SavedViews from "./SaveViews";
import MenuDropdown from "@/components/select dropdown/MenuDropdown";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchFilter = ({ table }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setIsFetching(true);
  };

  // Simulate data fetching
  useEffect(() => {
    if (isFetching) {
      const fetchData = async () => {
        // Simulate a network request with a timeout
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsFetching(false);
        setIsSpinning(false);
      };

      fetchData();
    }
  }, [isFetching]);

  return (
    <>
      <div className="search-filter-component">
        <div className="main flex space-x-2">
          <Input
            type="search"
            placeholder="search contract records..."
            className="h-9 w-1/4"
          />
          <DropdownItem
            className="h-9 w-[200px] font-medium"
            placeholder="Recently Updated"
            icon={<></>}
            selected="Recently Updated"
            DataContent={[]}
          />
          {table === "record" && (
            <MenuDropdown
              triggerButton={
                <Button className="space-x-2 h-9 bg-transparent border text-black hover:bg-gray-50">
                  <span className="">
                    <HiAdjustmentsHorizontal />
                  </span>
                  <span className="">Filter</span>
                </Button>
              }
              Data={[]}
              required={false}
            />
          )}

          {table === "document" && (
            <Select>
              <SelectTrigger className="w-[120px] h-9 font-medium">
                <SelectValue placeholder="File Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="doc">Doc</SelectItem>
                  <SelectItem value="pdf">Pdf</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          <div className="flex space-x-2">
            <QuickViews
              triggerButton={
                <ToolTip
                  className="hover:bg-gray-50 bg-transparent text-slate-400 border h-9"
                  hoverItem={<Eye size={20} />}
                  textContent="Quick Views"
                />
              }
            />
            <SavedViews
              triggerButton={
                <ToolTip
                  className="hover:bg-gray-50 bg-transparent text-slate-400 h-9 border"
                  hoverItem={<SquareArrowDown size={18} />}
                  textContent="Saved Views"
                />
              }
            />
          </div>
          <Button
            onClick={handleClick}
            className="bg-transparent border text-lg text-slate-400 h-9 hover:bg-gray-50"
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isSpinning ? "animate-spin" : ""
              }`}
            >
              <LuRotateCw />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
