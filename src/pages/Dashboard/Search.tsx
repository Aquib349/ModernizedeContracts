import { Input } from "@/components/ui/input";
import { FcBarChart } from "react-icons/fc";

const Search = () => {
  return (
    <>
      <div className="search-component flex justify-between pb-2">
        <div className="w-1/3 px-1 flex items-center gap-1">
          <span className="text-2xl">
            <FcBarChart />
          </span>
          <p className="text-lg font-bold">Dashboard</p>
        </div>
        {/* <div className="w-2/3">
          <Input type="search" placeholder="search..." />
        </div> */}
      </div>
    </>
  );
};

export default Search;
