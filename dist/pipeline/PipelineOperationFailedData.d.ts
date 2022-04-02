export interface PipelineOperationFailedData {
    type: string;
    message?: string;
    url?: string;
    statusCode?: number;
    body?: any;
    response?: any;
}
