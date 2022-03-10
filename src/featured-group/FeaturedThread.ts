import { FeaturedGroup, FeaturedThreadPreference, FeaturedThreadRelease, FeaturedThreadPushNotification } from ".";
import { PipelineNode } from '..'

export interface FeaturedThread {
    id: string
    title: string
    content?: string
    body?: string
    itemLimit?: number
    timezone?: string
    timezoneDelay?: boolean
    preferenceTypes: string[]
    platforms: string[]

    featuredGroup: FeaturedGroup
    featuredThreadPreferences: FeaturedThreadPreference[]
    featuredThreadReleases: FeaturedThreadRelease[]
    featuredThreadPushNotifications: FeaturedThreadPushNotification[]
    pipelineNodes: PipelineNode[]

    startedAt: number
    endedAt: number
    createdAt: string
    updatedAt: string
}