import { PipelineGroup } from "..";

export interface ProjectMobileUserConfiguration {
  hubUserId: string;
  hubProjectId: string;
  name?: string;
  username?: string;
  email: string;
  domains: string[];
  pluginIds: string[];
  projects: PipelineGroup[];
}
