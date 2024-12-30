var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiClient, handleApiError } from "./axios.service";
// method "GET" : get all the batches
export const Batches = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiClient.get(`/${userId}/pipelineBatches`);
        return response.data;
    }
    catch (error) {
        handleApiError(error);
    }
});
// method "GET" : get all the document of individual batch
export const BatchDocuments = (userId, batchId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiClient.get(`/${userId}/documentInTakePipelines?batchId=${batchId}`);
        return response.data;
    }
    catch (error) {
        handleApiError(error);
    }
});
// method "GET" : get the stage details of each document
export const stageDetails = (userId, documentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiClient.get(`/${userId}/documentIngestionSummary?documentInTakePipelineId=${documentId}`);
        return response.data;
    }
    catch (error) {
        handleApiError(error);
    }
});
