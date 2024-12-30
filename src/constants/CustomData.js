import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SlBell } from "react-icons/sl";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegHandPointer } from "react-icons/fa";
import { BsCalendar2Month } from "react-icons/bs";
import { CalendarDays, CalendarRange } from "lucide-react";
export const contractSummerycolumns = [
    { header: "Category", key: "category" },
    {
        header: "Details",
        key: "details",
        render: (details) => _jsx("div", { children: details }),
    },
];
// Define table data
export const contractSummerydata = [
    {
        category: "Primary Reviewers",
        details: "Rick, Lisa, Mike (Counterparty)",
    },
    {
        category: "Documents Being Reviewed",
        details: (_jsxs(_Fragment, { children: [_jsx("p", { children: "Draft Contract Agreement v2.3 (Updated February 10, 2024)" }), _jsx("p", { children: "Scope of Work v3.0 (Last Updated March 1, 2024)" })] })),
    },
];
// Define table columns
export const columns = [
    { header: "Contract Type", key: "ContractType" },
    { header: "Count", key: "value" },
    { header: "% of Total Contracts", key: "Percentage" },
    { header: "Status Breakdown", key: "Status" },
];
// Define table data
export const dataItem = [
    {
        ContractType: "Master Service Agreements",
        value: "120",
        Percentage: "27",
        Status: "80 Active, 40 Expired",
    },
    {
        ContractType: "Dealer Contracts",
        value: "100",
        Percentage: "22",
        Status: "70 Active, 10 Terminating",
    },
    {
        ContractType: "Software Licensing",
        value: "80",
        Percentage: "18",
        Status: "60 Active, 20 Expired",
    },
    {
        ContractType: "Service Agreements",
        value: "150",
        Percentage: "33",
        Status: "120 Active, 30 Expired",
    },
];
// Define table columns
export const columns1 = [
    { header: "Metric", key: "Metric" },
    { header: "Value", key: "value" },
    { header: "Key Insights", key: "KeyInsights" },
];
// Define table data
export const data1 = [
    {
        Metric: "Total Contracts",
        value: "$450",
        KeyInsights: "5% increase QoQ",
    },
    {
        Metric: "Total Contract Value (TCV)",
        value: "$200M",
        KeyInsights: "7% growth driven by renewals",
    },
    {
        Metric: "Average Contract Value (ACV)",
        value: "$500K",
        KeyInsights: "10% increase in Large Hospital deals",
    },
    {
        Metric: "Revenue Impact from Issues",
        value: "-$5M",
        KeyInsights: "Concentrated in SLA disputes",
    },
];
// Define table columns
export const columns2 = [
    { header: "Renewal Activity", key: "RenewalActivity" },
    { header: "Count", key: "Count" },
    { header: "Potential Revenue", key: "PotentialRevenue" },
    { header: "Renewal Probability", key: "RenewalProbability" },
];
// Define table data
export const data2 = [
    {
        RenewalActivity: "Initial Renewal Review",
        Count: "20",
        PotentialRevenue: "$5M",
        RenewalProbability: "70%",
    },
    {
        RenewalActivity: "In Negotiation",
        Count: "15",
        PotentialRevenue: "$4M",
        RenewalProbability: "78%",
    },
    {
        RenewalActivity: "Final Approval",
        Count: "10",
        PotentialRevenue: "$2.2M",
        RenewalProbability: "90%",
    },
    {
        RenewalActivity: "Renewal Completed",
        Count: "12",
        PotentialRevenue: "$3.3M",
        RenewalProbability: "100%",
    },
];
// Define table columns
export const columns3 = [
    { header: "Metric", key: "Metric" },
    { header: "Value", key: "Value" },
    { header: "Key Insights", key: "KeyInsights" },
];
// Define table data
export const data3 = [
    {
        Metric: "New Contract Signed",
        Value: "50",
        KeyInsights: "$15M Added Revenue",
    },
    {
        Metric: "Average Intake Time",
        Value: "15 minutes",
        KeyInsights: "Reduced by 2 min QoQ",
    },
    {
        Metric: "Intake Completion Rate",
        Value: "95%",
        KeyInsights: "Remaining 5% pending information",
    },
    {
        Metric: "Contract Updates (in Progress)",
        Value: "18",
        KeyInsights: "New Contracts Updates",
    },
];
// Define table columns
export const columns4 = [
    { header: "Renewal Activity", key: "RenewalActivity" },
    { header: "Count", key: "Count" },
    { header: "Revenue Impact", key: "RevenueImpact" },
    { header: "Resolution Status", key: "ResolutionStatus" },
];
// Define table data
export const data4 = [
    {
        RenewalActivity: "SLA Disputes",
        Count: "20",
        RevenueImpact: "-$2M",
        ResolutionStatus: "60% Resolved",
    },
    {
        RenewalActivity: "Payment Delays",
        Count: "15",
        RevenueImpact: "-$1M",
        ResolutionStatus: "Pending Resolution",
    },
    {
        RenewalActivity: "Compliance Violations",
        Count: "10",
        RevenueImpact: "-$1.2M",
        ResolutionStatus: "Escalated to Legal",
    },
    {
        RenewalActivity: "Others",
        Count: "12",
        RevenueImpact: "-$100M",
        ResolutionStatus: "60% Resolved",
    },
];
export const NavItems = [
    { id: 2, name: "Alerts", icon: _jsx(SlBell, {}) },
    { id: 4, name: "Help Documents", icon: _jsx(FaRegCircleQuestion, {}) },
    { id: 5, name: "Profile", icon: _jsx(FaRegUserCircle, {}) },
];
export const sideItem = [
    { id: 1, name: "Dashboard", icon: _jsx(MdSpaceDashboard, {}), links: "/" },
    {
        id: 2,
        name: "Business Area Dashboard",
        icon: _jsx(FaRegHandPointer, {}),
        links: "/business-area",
    },
    {
        id: 3,
        name: "Setting",
        icon: _jsx(IoSettingsOutline, {}),
        links: "business-setting",
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
export const data = [
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
export const contractData = [
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
export const documentData = [
    {
        id: "doc001",
        document_name: "eContracts_Pipeline Status Report (2).pdf",
        document_no: 2001,
        document_type: "Primary Document",
        status: "Finalized Document",
        date_uploaded: "2024-09-26",
    },
    {
        id: "doc002",
        document_name: "eContracts_Upcoming Obligations (3)34.pdf",
        document_no: 2002,
        document_type: "Finalized Document",
        status: "Finalized Document",
        date_uploaded: "2024-09-26",
    },
    {
        id: "doc003",
        document_name: "SALES AGREEMENT.pdf",
        document_no: 2003,
        document_type: "Primary Document",
        status: "Finalized Document",
        date_uploaded: "2024-09-26",
    },
    {
        id: "doc004",
        document_name: "WO Agreement.docx",
        document_no: 2004,
        document_type: "Finalized Document",
        status: "Finalized Document",
        date_uploaded: "2024-09-26",
    },
    {
        id: "doc005",
        document_name: "SaaS Subscription Agreement REQ15043 - 9-13-21.pdf",
        document_no: 2005,
        document_type: "Primary Document",
        status: "Finalized Document",
        date_uploaded: "2021-09-13",
    },
    {
        id: "doc006",
        document_name: "Workiva - Master Subscription and Services Agreement - 02-12-16.pdf",
        document_no: 2006,
        document_type: "Finalized Document",
        status: "Finalized Document",
        date_uploaded: "2016-02-12",
    },
    {
        id: "doc007",
        document_name: "Alteryx, Inc. - Quote Q-449817 (TS) REQ17794 - 1-31-24._NV12292023144325.pdf",
        document_no: 2007,
        document_type: "Primary Document",
        status: "Finalized Document",
        date_uploaded: "2024-01-31",
    },
    {
        id: "doc008",
        document_name: "Xerox - Country Participation Agreement - 10-19-12.pdf",
        document_no: 2008,
        document_type: "Finalized Document",
        status: "Finalized Document",
        date_uploaded: "2012-10-19",
    },
    {
        id: "doc009",
        document_name: "rest-api-azure.pdf",
        document_no: 2009,
        document_type: "Finalized Document",
        status: "Finalized Document",
        date_uploaded: "2024-09-26",
    },
    {
        id: "doc010",
        document_name: "Bharat Petroleum-LA 775579-1_Healthy Habits Dental and Ortho Care_Purchase Agreement_2024-01-18.pdf",
        document_no: 2010,
        document_type: "Finalized Document",
        status: "Submission of Amendment",
        date_uploaded: "2024-01-18",
    },
    {
        id: "doc011",
        document_name: "00013235_OS Associates of the Maine Line_PA_0000977130_2024-07-08.pdf",
        document_no: 2011,
        document_type: "Finalized Document",
        status: "Submission of Amendment",
        date_uploaded: "2024-07-08",
    },
    {
        id: "doc012",
        document_name: "00013172_N Florida Oral and Facial Surg_DPMS PA_2024-07-09.pdf",
        document_no: 2012,
        document_type: "Finalized Document",
        status: "Submission of Amendment",
        date_uploaded: "2024-07-09",
    },
    {
        id: "doc013",
        document_name: "Children's Mercy Hospital 05-08-19 to 05-08-20.pdf",
        document_no: 2013,
        document_type: "Finalized Document",
        status: "Submission of Amendment",
        date_uploaded: "2019-05-08",
    },
    {
        id: "doc014",
        document_name: "00013290_Dr Joseph McMurray_DPMS PA_2024-07-09.pdf",
        document_no: 2014,
        document_type: "Finalized Document",
        status: "Submission of Amendment",
        date_uploaded: "2024-07-09",
    },
    {
        id: "doc015",
        document_name: "MSA Agreement.docx",
        document_no: 2015,
        document_type: "Finalized Document",
        status: "Amendment Request 005",
        date_uploaded: "2024-09-26",
    },
    {
        id: "doc016",
        document_name: "00013071_Oral and Facial Surgery CTR_DPMS PA_2024-06-26.pdf",
        document_no: 2016,
        document_type: "Finalized Document",
        status: "License Agreement Contract",
        date_uploaded: "2024-06-26",
    },
];
export const contractDetailNavigation = [
    { id: 1, name: "Summary" },
    { id: 2, name: "Documents" },
    { id: 3, name: "Metdata" },
    { id: 4, name: "People and Permissions" },
    { id: 5, name: "Amendments" },
    { id: 6, name: "Clauses" },
    { id: 7, name: "Obligations" },
    { id: 8, name: "Correspondence" },
    { id: 9, name: "Compliance" },
    { id: 10, name: "Related Projects" },
];
export const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const viewOptions = [
    { key: "day", icon: _jsx(CalendarDays, { size: 12 }), label: "Day" },
    { key: "week", icon: _jsx(CalendarRange, { size: 12 }), label: "Week" },
    {
        key: "month",
        icon: _jsx(BsCalendar2Month, { className: "text-xs" }),
        label: "Month",
    },
];
