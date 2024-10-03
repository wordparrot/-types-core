import { PipelineJobRatioReport } from "./PipelineJobRatioReport";
export interface PipelineJobReportSummary {
    pipelineId: string;
    pipelineJobId: string;
    title: string;
    content: string;
    status: string;
    createdAt: string;
    ratioReport?: PipelineJobRatioReport;
}
