import { Pipeline } from ".";
import { Site } from "..";
import { User } from '..';
export interface PipelineGroup {
    id: string;
    title: string;
    content: string;
    pipelines: Pipeline[];
    site: Site;
    user: User;
    createdAt: string;
    updatedAt: string;
}
