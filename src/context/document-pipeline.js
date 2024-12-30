var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useLoading } from "@/hooks/use-loading";
import { BatchDocuments, Batches, stageDetails, } from "@/services/pipeline.service";
import { createContext, useEffect, useState, } from "react";
export const PipelineContext = createContext(undefined);
export const PipelineContextProvider = ({ children, }) => {
    const { setLoading } = useLoading();
    const [batches, setBatches] = useState([]);
    const [batchDocuments, setBatchDocuments] = useState([]);
    const userId = localStorage.getItem("userId") || "3Xae5Udc";
    // funciton to get all the batches
    function getAllBatches() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            setLoading(true);
            try {
                const data = yield Batches(userId);
                setBatches(data);
                if ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.RowKey) {
                    yield getAllBatchDocuments((_b = data[0]) === null || _b === void 0 ? void 0 : _b.RowKey);
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        });
    }
    // function to get all the document of individual batch
    function getAllBatchDocuments(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            setLoading(true);
            try {
                const data = yield BatchDocuments(userId, batchId);
                setBatchDocuments(data);
                return data;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        });
    }
    // function to get the stage details of individual document
    function getDocumentDetail(documentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield stageDetails(userId, documentId);
                return data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    useEffect(() => {
        getAllBatches();
    }, []);
    return (_jsx(PipelineContext.Provider, { value: {
            AllBatch: batches,
            batchDocuments,
            setBatchDocuments,
            getAllBatchDocuments,
            getDocumentDetail,
        }, children: children }));
};
