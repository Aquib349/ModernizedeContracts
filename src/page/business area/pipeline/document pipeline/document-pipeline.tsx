import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoaderCircle, Menu } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./table";

const DocumentPipeline = () => {
  const [allBatches, setAllBatches] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [TableRecord, setTableRecord] = useState([]);

  // function to get all the batch
  async function getAllBatches() {
    const header = {
      "eContracts-ApiKey":
        "4oTDTxvMgJjbGtZJdFAnwBCroe8uoVGvk+0fR3bHzeqs9KDPOJAzuzvXh9TSuiUvl7r2dhNhaNOcv598qie65A==",
    };
    try {
      const batch = await axios.get(
        "https://api-otbt-econ-test.azurewebsites.net/api/accounts/3Xae5Udc/pipelineBatches",
        { headers: header }
      );
      setAllBatches(batch.data);
      getTableRecord(batch.data[0]?.RowKey);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTableRecord(RowKey: string) {
    const header = {
      "eContracts-ApiKey":
        "4oTDTxvMgJjbGtZJdFAnwBCroe8uoVGvk+0fR3bHzeqs9KDPOJAzuzvXh9TSuiUvl7r2dhNhaNOcv598qie65A==",
    };
    try {
      const response = await axios.get(
        `https://api-otbt-econ-test.azurewebsites.net/api/accounts/3Xae5Udc/documentInTakePipelines?batchId=${RowKey}`,
        { headers: header }
      );
      setTableRecord(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getAllBatches();
  }, []);

  if (allBatches.length <= 0) {
    return (
      <div className="text-center">
        {/* <LoaderCircle /> */}
        loading...
      </div>
    );
  }

  return (
    <>
      <div className="document-intake-component">
        <div className="main pr-2">
          <div className="flex items-center space-x-2">
            <div className="batch-files w-full">
              <Tabs defaultValue={allBatches[0]?.BatchName} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  {allBatches.map((batch) => (
                    <TabsTrigger
                      key={batch.RowKey}
                      value={batch.BatchName}
                      onClick={() => getTableRecord(batch.RowKey)}
                    >
                      {batch.BatchName}
                    </TabsTrigger>
                  ))}
                  <TabsTrigger
                    value="new tab"
                    onClick={() => setSelectedTab("new tab")}
                  >
                    New Batch
                  </TabsTrigger>
                </TabsList>
                {allBatches.map((batch) => (
                  <TabsContent key={batch.RowKey} value={batch.BatchName}>
                    <Table Record={TableRecord} />
                  </TabsContent>
                ))}
                <TabsContent value="new tab">
                  <div>Create a new batch here.</div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentPipeline;
