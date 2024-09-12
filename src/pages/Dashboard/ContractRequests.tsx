import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusColor from "@/constants/StatusColor";

const ContractRequests = () => {
  return (
    <>
      <div className="contract-request-component w-1/3">
        <div className="main bg-white h-[350px] rounded-md p-3 shadow mt-3">
          <div className="flex justify-between border-b pb-2">
            <h1 className="font-bold text-lg">Contract Requests</h1>
            <Button className="h-8 bg-white text-blue-500 hover:bg-gray-100">
              View All
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="border-none bg-gray-50">
                <TableHead className="h-8 px-1 text-slate-500 text-[0.75rem] text-start">
                  Request Type
                </TableHead>
                <TableHead className="h-8 px-1 text-slate-500 text-[0.75rem] text-center">
                  Requestor
                </TableHead>
                <TableHead className="h-8 px-1 text-slate-500 text-[0.75rem] text-right">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-md hover:bg-transparent">
                <TableCell className="py-2 px-1 font-medium text-start">
                  License Agreement
                </TableCell>
                <TableCell className="py-2 px-1 text-center">
                  Johnson willey
                </TableCell>
                <TableCell className="py-2 px-1 flex justify-end items-center">
                  <StatusColor status="Active" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ContractRequests;
