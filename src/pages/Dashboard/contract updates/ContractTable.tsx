import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContractTableHeading } from "@/constants/custom data/CustomData";
import StatusColor from "@/constants/StatusColor";
import Actions from "./Actions";

const ContractTable = () => {
  const Contracts = [
    {
      id: 1,
      name: "Workday - Master SAAS Subscription Agreement Optimus Test 004",
      C_ID: "S59VU33Q2TXIXB",
      status: "Expired",
      party_name: "Brookfield-SUBSCRIPTION AGREEMENT",
      date: "07/09/2024",
    },
    {
      id: 2,
      name: "PitchBook - Subscription Agreement REQ14788 Optimus Test 006",
      C_ID: "CAVN04012015",
      status: "Awaiting",
      party_name: "Brookfield-Service Agreement",
      date: "05/09/2024",
    },
  ];

  return (
    <>
      <div className="contract-data-table">
        <div className="main pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                {ContractTableHeading.map((val) => (
                  <TableHead
                    key={val.id}
                    className="h-8 px-1 text-black bg-slate-100"
                  >
                    {val.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Contracts.map((val) => (
                <TableRow key={val.id}>
                  <TableCell className="py-3 px-1 cursor-pointer">
                    {val.name}
                  </TableCell>
                  <TableCell className="py-3 px-1">{val.C_ID}</TableCell>
                  <TableCell className="py-3 px-1 w-[100px]">
                    <StatusColor status={val.status} />
                  </TableCell>
                  <TableCell className="py-3 px-1">{val.party_name}</TableCell>
                  <TableCell className="py-3 px-1">{val.date}</TableCell>
                  <TableCell className="py-3 px-1">
                    <Actions />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ContractTable;
