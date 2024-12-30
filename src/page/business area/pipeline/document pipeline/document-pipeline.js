var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Table from "./data-table";
import { usePipeline } from "@/hooks/use-pipeline";
import DocumentPipelineSkeleton from "@/skeleton/document-pipeline";
import { useLoading } from "@/hooks/use-loading";
const DocumentPipeline = () => {
    const { loading } = useLoading();
    const { AllBatch, batchDocuments, setBatchDocuments, getAllBatchDocuments, getDocumentDetail, } = usePipeline();
    const [batches, setBatches] = useState([]);
    const [selectedTab, setSelectedTab] = useState();
    const [sheetData, setSheetData] = useState(null);
    const tabsContainerRef = useRef(null);
    const getSheetData = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield getDocumentDetail(id);
        setSheetData(response);
    });
    // Sync batches with AllBatch from the context
    useEffect(() => {
        var _a;
        if ((AllBatch === null || AllBatch === void 0 ? void 0 : AllBatch.length) > 0) {
            setBatches(AllBatch);
            setSelectedTab((_a = AllBatch[0]) === null || _a === void 0 ? void 0 : _a.BatchName);
        }
    }, [AllBatch]);
    // Function to fetch batch documents
    function getAllBatchDocument(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield getAllBatchDocuments(id);
            setBatchDocuments(response);
        });
    }
    // Scroll tabs container left or right
    const scrollTabs = (direction) => {
        if (tabsContainerRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            tabsContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
            console.log(scrollAmount);
        }
    };
    // Function to add new batch
    const addNewBatch = () => {
        const newBatch = {
            BatchName: `Batch ${Date.now()}`,
            PipelineType: "TypeA",
            Status: "New",
            Created: new Date().toISOString(),
            Modified: null,
            NumberOfItems: 0,
            ProcessedItems: 0,
            FailedItems: 0,
            PartitionKey: Math.floor(Math.random() * 1000),
            RowKey: `row_${Date.now()}`,
            Timestamp: new Date().toISOString(),
            ETag: "",
        };
        setBatches((prevBatches) => {
            const updatedBatches = [...prevBatches, newBatch];
            setSelectedTab(newBatch.BatchName);
            return updatedBatches;
        });
        getAllBatchDocument(newBatch.RowKey);
    };
    // Handle empty state for AllBatch
    if (!AllBatch || AllBatch.length === 0) {
        return (_jsx(_Fragment, { children: _jsx(DocumentPipelineSkeleton, {}) }));
    }
    return (_jsx("div", { className: "document-intake-component", children: _jsx("div", { className: "main", children: _jsx("div", { className: "batch-files w-full", children: _jsxs(Tabs, { value: selectedTab, onValueChange: setSelectedTab, children: [_jsxs("div", { className: "relative w-full flex items-center", children: [_jsx("button", { onClick: () => scrollTabs("left"), className: "absolute left-0 z-10 p-3 hover:bg-white rounded-full bg-[#fafafa]", children: _jsx(ArrowLeft, { size: 14 }) }), _jsxs(TabsList, { ref: tabsContainerRef, className: "flex justify-start w-full overflow-x-auto rounded-full whitespace-nowrap px-10 no-scrollbar bg-[#fafafa]", children: [batches.map((batch) => (_jsx(TabsTrigger, { value: batch.BatchName, onClick: () => {
                                                getAllBatchDocument(batch.RowKey);
                                                setSelectedTab(batch.BatchName);
                                            }, className: "flex-shrink-0 px-4 py-2", children: batch.BatchName.length > 3
                                                ? `${batch.BatchName.slice(0, 3)}..`
                                                : batch.BatchName }, batch.RowKey))), _jsx(TabsTrigger, { value: "new tab", className: "flex-shrink-0 px-4 py-2", onClick: addNewBatch, children: _jsx(Plus, { size: 18 }) })] }), _jsx("button", { onClick: () => scrollTabs("right"), className: "absolute right-0 z-10 p-3 hover:bg-white rounded-full bg-[#fafafa]", children: _jsx(ArrowRight, { size: 14 }) })] }), batches.map((batch) => (_jsx(TabsContent, { value: batch.BatchName, children: _jsx(Table, { Record: batchDocuments, loading: loading, getSheetData: getSheetData, sheetData: sheetData }) }, batch.RowKey)))] }) }) }) }));
};
export default DocumentPipeline;
