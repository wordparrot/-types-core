import { BroadcastToFeaturedGroup } from ".."
import { BroadcastToFeaturedThread } from ".."
import { PushNotificationToFeaturedThread } from ".."
import { Entry } from '..'
import { PushNotificationToFeaturedGroup } from ".."

import { DynamicServiceTrackedValues } from '..'

export interface DynamicServiceResponseOutputBase extends DynamicServiceTrackedValues {
    message: string
    messageVars: Record<string, string | number>
    status: string
    errors: Record<string, unknown>
    errorMessage: string
    pipelineCount: number
    repositoryItemCount: number
    entryCount: number

    entriesToPassOn: Entry[]
    
    repositoryId: string
    chartId: string
    categoryId: string
    
    conditionFailed: string[]
    broadcastToFeaturedGroups: BroadcastToFeaturedGroup[]
    broadcastToFeaturedThreads: BroadcastToFeaturedThread[]
    pushNotificationToFeaturedGroups: PushNotificationToFeaturedGroup[]
    pushNotificationToFeaturedThreads: PushNotificationToFeaturedThread[]
}

export type DynamicServiceResponseOutput = Partial<DynamicServiceResponseOutputBase>