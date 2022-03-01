import { FeaturedGroup, FeaturedThreadPreference, FeaturedThreadRelease } from ".";

export interface FeaturedThread {
    id: string
    featuredGroupId: string
    featuredGroup?: FeaturedGroup
    title: string
    content: string
    body: string
    itemLimit?: number
    timezone?: string
    timezoneDelay?: boolean
    platforms: string[]
    featuredThreadPreferences: FeaturedThreadPreference[]
    preferenceTypes: string[]
    releases: FeaturedThreadRelease[]
    createdAt?: string
    updatedAt?: string
}