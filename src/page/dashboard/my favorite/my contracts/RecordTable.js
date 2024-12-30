import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { contractData } from "@/constants/CustomData";
import { Link } from "react-router-dom";
const columns = [
    {
        id: "select",
        header: ({ table }) => (_jsx(Checkbox, { checked: table.getIsAllPageRowsSelected(), onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value), "aria-label": "Select all" })),
        cell: ({ row }) => (_jsx(Checkbox, { checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!!value), "aria-label": "Select row" })),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "contract_name",
        header: ({ column }) => (_jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: ["Contract Name", _jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })] })),
        cell: ({ row }) => (_jsx("div", { className: "lowercase cursor-pointer", children: _jsx(Link, { to: "/contracts/contractSummary", children: row.getValue("contract_name") }) })),
    },
    {
        accessorKey: "contract_no",
        header: "Contract No.",
        cell: ({ row }) => _jsx("div", { children: row.getValue("contract_no") || "-" }),
    },
    {
        accessorKey: "contract_type",
        header: "Contract Type",
        cell: ({ row }) => _jsx("div", { children: row.getValue("contract_type") || "-" }),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (_jsx("div", { className: "capitalize", children: row.getValue("status") })),
    },
    {
        accessorKey: "date",
        header: "Updated Date",
        cell: ({ row }) => _jsx("div", { children: row.getValue("date") || "-" }),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const contract = row.original;
            return (_jsx("div", { className: "flex justify-start", children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", className: "h-8 w-4 p-0", children: [_jsx("span", { className: "sr-only", children: "Open menu" }), _jsx(MoreHorizontal, { className: "h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "Actions" }), _jsx(DropdownMenuItem, { onClick: () => navigator.clipboard.writeText(contract.id), children: "Copy contract ID" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: _jsx(Link, { to: "/contract-detail", children: "View Details" }) })] })] }) }));
        },
    },
];
export default function RecordTable() {
    var _a;
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const table = useReactTable({
        data: contractData,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    return (_jsxs("div", { className: "w-full", children: [_jsx("div", { className: "rounded-md border", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                    return (_jsx(TableHead, { className: "h-8 bg-gray-50", children: header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                }) }, headerGroup.id))) }), _jsx(TableBody, { children: ((_a = table.getRowModel().rows) === null || _a === void 0 ? void 0 : _a.length) ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { className: "py-2", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center py-2", children: "No results." }) })) })] }) }), _jsxs("div", { className: "flex items-center justify-end space-x-2 pt-2", children: [_jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [table.getFilteredSelectedRowModel().rows.length, " of", " ", table.getFilteredRowModel().rows.length, " row(s) selected."] }), _jsxs("div", { className: "space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "Previous" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "Next" })] })] })] }));
}
