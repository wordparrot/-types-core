import { PipelineGroup } from "..";
export declare type ProjectStatus = "active" | "disabled";
export interface Project extends PipelineGroup {
    status: ProjectStatus;
}
