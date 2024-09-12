import { AiOutlineBars } from "react-icons/ai";
import { SlBell } from "react-icons/sl";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegHandPointer } from "react-icons/fa";
import { TbBrandDatabricks } from "react-icons/tb";
import { LiaFileContractSolid } from "react-icons/lia";
import { BsUiChecks } from "react-icons/bs";

export const NavItems = [
  { id: 1, name: "Tasks", icon: <AiOutlineBars /> },
  { id: 2, name: "Alerts", icon: <SlBell /> },
  { id: 3, name: "Bookmarks", icon: <IoBookmarkOutline /> },
  { id: 4, name: "Help Documents", icon: <FaRegCircleQuestion /> },
  { id: 5, name: "Profile", icon: <FaRegUserCircle /> },
];

export const sideItem = [
  { id: 1, name: "Dashboard", icon: <MdSpaceDashboard />, links: "/" },
  {
    id: 2,
    name: "Requests",
    icon: <FaRegHandPointer />,
    links: "/requests",
  },
  { id: 3, name: "Pipeline", icon: <TbBrandDatabricks />, links: "/pipeline" },
  {
    id: 4,
    name: "Contracts",
    icon: <LiaFileContractSolid />,
    links: "/contracts",
  },
  {
    id: 5,
    name: "Activities",
    icon: <BsUiChecks />,
    links: "/activities",
  },
];

export const ContractUpdateHeadings = [
  { id: 1, name: "Total Contracts" },
  { id: 2, name: "Pending Contracts" },
  { id: 3, name: "Approved Contracts" },
  { id: 4, name: "Completed Contracts" },
  { id: 5, name: "Cancelled Contracts" },
];

export const ContractTableHeading = [
  { id: 1, name: "Contract Name" },
  { id: 2, name: "Contract ID" },
  { id: 3, name: "Status" },
  { id: 4, name: "Name Of Party" },
  { id: 5, name: "Sign Date" },
  { id: 6, name: "Action" },
];

export type Requests = {
  id: string;
  request_name: string;
  requestor: string;
  status: "pending" | "processing" | "success" | "failed";
  date: string;
};

export const data: Requests[] = [
  {
    id: "m5gr84i9",
    request_name: "Request For Consulting Services Agreement / 26th Dec 23 - 6",
    requestor: "Ken Smith",
    status: "success",
    date: "2023-08-01",
  },
  {
    id: "3u1reuv4",
    request_name: "Data Backup",
    requestor: "Abe Johnson",
    status: "success",
    date: "2023-08-05",
  },
  {
    id: "derv1ws0",
    request_name: "Server Migration",
    requestor: "Monserrat Lee",
    status: "processing",
    date: "2023-08-10",
  },
  {
    id: "5kma53ae",
    request_name: "Database Cleanup",
    requestor: "Silas Green",
    status: "success",
    date: "2023-08-12",
  },
  {
    id: "bhqecj4p",
    request_name: "Email Server Setup",
    requestor: "Carmella White",
    status: "failed",
    date: "2023-08-15",
  },
];

export type ContractRecords = {
  id: string;
  contract_name: string;
  contract_no: number;
  contract_type: string;
  status: "pending" | "processing" | "success" | "failed";
  date: string;
};


export const contractData: ContractRecords[] = [
  {
    id: "cr001",
    contract_name: "OfficeSpace - Subscription Services Agreement REQ18334 - 8-29-24 1 - 20240909192009900",
    contract_no: 1001,
    contract_type: "Full-time",
    status: "pending",
    date: "2023-08-15",
  },
  {
    id: "cr002",
    contract_name: "Consultancy Contract",
    contract_no: 1002,
    contract_type: "Part-time",
    status: "processing",
    date: "2023-07-22",
  },
  {
    id: "cr003",
    contract_name: "Maintenance Contract",
    contract_no: 1003,
    contract_type: "Temporary",
    status: "success",
    date: "2023-06-10",
  },
  {
    id: "cr004",
    contract_name: "Freelance Agreement",
    contract_no: 1004,
    contract_type: "Freelance",
    status: "failed",
    date: "2023-09-05",
  },
  {
    id: "cr005",
    contract_name: "Lease Contract",
    contract_no: 1005,
    contract_type: "Long-term",
    status: "success",
    date: "2023-05-30",
  },
  {
    id: "cr006",
    contract_name: "Purchase Agreement",
    contract_no: 1006,
    contract_type: "Short-term",
    status: "pending",
    date: "2023-08-01",
  },
  {
    id: "cr007",
    contract_name: "Supply Agreement",
    contract_no: 1007,
    contract_type: "Full-time",
    status: "processing",
    date: "2023-07-12",
  },
  {
    id: "cr008",
    contract_name: "Employment Contract",
    contract_no: 1008,
    contract_type: "Part-time",
    status: "success",
    date: "2023-08-25",
  },
  {
    id: "cr009",
    contract_name: "Non-disclosure Agreement",
    contract_no: 1009,
    contract_type: "Freelance",
    status: "failed",
    date: "2023-09-02",
  },
  {
    id: "cr010",
    contract_name: "Partnership Agreement",
    contract_no: 1010,
    contract_type: "Long-term",
    status: "success",
    date: "2023-06-18",
  },
];
