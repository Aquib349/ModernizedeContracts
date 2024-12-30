// Interface for all the batches
export interface AllBatches {
  BatchName: string;
  PipelineType: string;
  Status: string;
  Created: string;
  Modified?: string | null;
  NumberOfItems: number;
  ProcessedItems: number;
  FailedItems: number;
  PartitionKey: number;
  RowKey: string;
  Timestamp: string;
  ETag: string;
}

// Interface for each batch document intake
export interface batchDocument {
  PipelineBatchId: string;
  DocumentName: string;
  DocumentUrl: string;
  IngestionStatus: string;
  ClassificationStatus: string;
  RecordSetupStatus: string;
  Created: string;
  Modified?: string | null;
  IntegrationId: string;
  IntegrationType: string;
  PartitionKey: string;
  RowKey: string;
  Timestamp: string;
  ETag: string;
}

// Interface for Document intake details
export interface DocumentIntake {
  DocumentInTakePipelineId: string;
  DocumentName: string;
  Extension: ".pdf" | ".docx" | ".jpg";
  IsOCRed: boolean;
  Size: number;
  DocumentUrl: string;
  ExceptionMessage?: string;
  PartitionKey: string;
  RowKey: string;
  Timestamp: string;
  ETag: string;
}
