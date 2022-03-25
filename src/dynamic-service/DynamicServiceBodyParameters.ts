import { DynamicServiceTrackedValues } from "./DynamicServiceTrackedValues"

export interface DynamicServiceBodyParameters extends DynamicServiceTrackedValues {
    status: string
    recordReports: boolean

    entriesFromParent: any[]
    category: any

    conditionFailedFromParent: string[]
    conditionFailed: string[]
}