import { StatusColor } from "@/constants/status-color";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

function ContractStatus() {
  return (
    <>
      <div className="main px-2 border border-slate-300 rounded-md">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="hover:no-underline flex items-center justify-between w-full">
              <div className="status-update-component flex items-center justify-between w-full">
                <h1 className="text-md font-semibold">Status Updates</h1>
                <button
                  type="button"
                  className={`rounded mr-5 bg-blue-100 border border-blue-400 px-2 py-1 text-xs text-blue-600
            hover:bg-blue-200 hover:text-blue-700`}
                  onClick={(e) => e.stopPropagation()}
                >
                  +Update/Post
                </button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <div className="rounded border bg-blue-50 py-2 px-0.5 text-xs">
                <div className="heading-status flex items-center gap-2 text-sm font-semibold">
                  <span className="text-xl">
                    <StatusColor status={"New"} />
                  </span>
                  <span className="font-medium">
                    Ready for Counterparty Signature
                  </span>
                </div>
                <p className="pl-7 py-1">No recent updates</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default ContractStatus;
