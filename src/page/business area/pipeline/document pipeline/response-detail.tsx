import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { bytesToMB } from "@/constants/byte-to-mb-converter";
import IconSelector from "@/constants/file-icon-selector";
import axios from "axios";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

interface ResponseDetailProps {
  RowKey: string;
  TriggerButton: React.ReactNode;
}

const ResponseDetail = ({ RowKey, TriggerButton }: ResponseDetailProps) => {
  const [sheetData, setSheetData] = useState<any>({});

  async function getSheetData() {
    const header = {
      "eContracts-ApiKey":
        "4oTDTxvMgJjbGtZJdFAnwBCroe8uoVGvk+0fR3bHzeqs9KDPOJAzuzvXh9TSuiUvl7r2dhNhaNOcv598qie65A==",
    };
    try {
      const response = await axios.get(
        `https://api-otbt-econ-test.azurewebsites.net/api/accounts/3Xae5Udc/documentIngestionSummary?documentInTakePipelineId=${RowKey}`,
        { headers: header }
      );
      setSheetData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch sheet data:", error);
    }
  }

  useEffect(() => {
    if (RowKey) {
      getSheetData();
    }
  }, [RowKey]);

  return (
    <Sheet>
      <SheetTrigger asChild>{TriggerButton}</SheetTrigger>

      <SheetContent
        style={{ width: "600px", maxWidth: "none" }}
        className="text-sm"
      >
        <SheetHeader>
          <SheetTitle>
            {sheetData?.DocumentName || "Document Details"}
          </SheetTitle>
          <SheetDescription>
            Details about the {sheetData?.DocumentName || "document"}
          </SheetDescription>
        </SheetHeader>
        <div className="details space-y-2 mt-4">
          <p>Is OCR Done: {sheetData?.IsOCRed ? "Yes" : "No"}</p>
          <p>
            Size:{" "}
            {sheetData?.Size ? bytesToMB(sheetData.Size).toFixed(2) : "N/A"} MB
          </p>
          <p className="flex items-center">
            Document Type:{" "}
            {sheetData?.Extension && (
              <IconSelector icon={sheetData.Extension} />
            )}
          </p>
          {sheetData?.DocumentUrl && (
            <Button className="bg-blue-600 h-9 text-xs hover:bg-blue-700">
              <a
                href={sheetData.DocumentUrl}
                className="flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download File</span>
                <Download size={14} />
              </a>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponseDetail;
