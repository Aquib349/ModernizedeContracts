import { FaRegFileLines } from "react-icons/fa6";
import { FaRegCalendarMinus } from "react-icons/fa6";
import Filter from "./Filter";
import { Link } from "react-router-dom";

const TaskManagement = () => {
  return (
    <>
      <div className="task-management-component w-2/4">
        <div className="bg-white shadow p-3 text-sm  pb-6 rounded-md h-[350px]">
          <div className="flex justify-between border-b pb-2">
            <h1 className="font-bold text-lg">Tasks Management</h1>
            <Filter />
          </div>

          

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-x-3">
              <div className="logo w-8 h-8 rounded-full bg-blue-100 flex justify-center items-center text-lg text-blue-600">
                <FaRegFileLines />
              </div>
              <div className="flex flex-col leading-4">
                <div className="flex justify-between">
                  <div className="status uppercase flex justify-center items-center px-1 rounded-sm bg-orange-500 font-medium text-[0.6rem] h-4 text-white tracking-wide">
                    In Progress
                  </div>
                  <div className="date flex items-center gap-x-1 text-xs text-slate-500">
                    <span className="">
                      <FaRegCalendarMinus />
                    </span>
                    <span className="">Sent on:</span>
                    <span className="">4-9-2024</span>
                  </div>
                </div>
                <p className="font-medium text-md">
                  Agreement No. 2208 is Further Processing
                </p>
              </div>
            </div>

            {/* task workflow */}
            <div className="flex flex-col text-xs leading-4 font-medium">
              <Link
                to={"/"}
                className="text-blue-500 cursor-pointer hover:text-cyan-500"
              >
                View Workflow
              </Link>
              <span className="text-red-500">Delayed 1d ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagement;
