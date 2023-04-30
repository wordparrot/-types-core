import { PipelineGroup } from "..";

export type ProjectStatus = "active" | "disabled";

export interface Project extends PipelineGroup {
  status: ProjectStatus;
}
