import { PipelineJob } from ".";
export interface PipelineJobSequence {
    id: string;
    status: string;
    jobs: PipelineJob[];
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
