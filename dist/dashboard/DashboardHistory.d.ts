export interface DashboardHistory {
    id: string;
    operation: string;
    values: Record<string, any>;
    pipelineId: string;
    repositoryId: string;
    createdAt: string;
    updatedAt: string;
}
