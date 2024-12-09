import React from "react";
import { LuGanttChartSquare } from "react-icons/lu";
import { LuListPlus } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "@/components/ui/button";

const TaskAndNextStep = () => {
  return (
    <>
      <div className="mt-3 border border-slate-300 rounded-md px-2">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="hover:no-underline flex items-center justify-between w-full">
              <div className="status-update-component flex items-center justify-between w-full">
                <h1 className="text-md font-semibold">Task & Next Step</h1>
                <div className="mr-5 flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="outline"
                    title="view all"
                    className="border-0 px-1 bg-transparent h-7 text-md"
                  >
                    <LuGanttChartSquare />
                  </Button>{" "}
                  <Button
                    variant="outline"
                    title="Add a task"
                    className="border-0 px-1 bg-transparent h-7 text-lg"
                  >
                    <LuListPlus />
                  </Button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <p className="text-slate-400 text-sm">
                No delayed and Upcoming Task
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default TaskAndNextStep;
