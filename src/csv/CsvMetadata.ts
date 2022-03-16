import { DynamicServiceBodyConfig } from ".."
import { CsvRowChange } from "./CsvRowChange"

export interface CsvMetadata {
    id?: string
    uniqId: string
    rowIdValue: string
    rowIdType: string
    secondaryRowId?: string
    pipelineNodeId?: string
    pipelineJobId?: string
    url?: string
    filename?: string
    page?: number
    pageName?: string

    provider?: string
    providerMetadata?: Record<string, any>

    csvArray?: any[][] 
    rowChanges?: CsvRowChange[]
    run?: DynamicServiceBodyConfig[]
}