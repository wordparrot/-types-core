export interface PipelineMessage {
    pipelineJobId: string;
    pipelineNodeId: string;
    provider: string;
    message: string;
    values: Record<string, unknown>;
}
