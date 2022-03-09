import { FeaturedThread } from ".";

export interface FeaturedThreadPushNotification {
    id: string
    title: string
    content?: string
    trackingId: string
    status: string

    featuredThread?: FeaturedThread

    createdAt: string
    updatedAt: string
}