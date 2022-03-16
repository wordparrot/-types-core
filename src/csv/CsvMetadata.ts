import { DynamicServiceBodyConfig } from ".."
import { CsvRowChange } from "./CsvRowChange"

export interface CsvMetadata {
    id?: string
    uniqId: string
    rowKeyValue: string
    rowKeyType: string
    rowKeyX: number
    secondaryRowKey?: string
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