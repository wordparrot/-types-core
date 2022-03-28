import { Site } from ".."

export interface DashboardHistory {
    id: string
    operation: string
    values: Record<string, any>
    site: Site;
    createdAt: string
    updatedAt: string
}