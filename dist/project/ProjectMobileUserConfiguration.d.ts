import { Project } from "..";
export interface ProjectMobileUserConfiguration {
    hubUserId: string;
    hubProjectId: string;
    userId: string;
    name?: string;
    username?: string;
    email: string;
    domains: string[];
    pluginIds: string[];
    projects: Project[];
}
