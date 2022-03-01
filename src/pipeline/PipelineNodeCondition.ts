export interface PipelineNodeCondition {
    id: string
    subject: string
    property: string
    comparator: string
    value: string
    required: boolean
    createdAt?: string
    updatedAt?: string
}