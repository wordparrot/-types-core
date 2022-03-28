import { Site } from "..";
export interface DashboardHistory {
    id: string;
    operation: string;
    values: Record<string, unknown>;
    site: Site;
    createdAt: string;
    updatedAt: string;
}
