import { PushNotificationMeta } from "."

export interface PushNotificationToFeaturedGroup {
    featuredGroupId: string
    featuredGroupTitle: string
    featuredThreads: {
      featuredThreadTitle: string
      featuredThreadId: string
      timezone: string
      timezoneDelay: boolean
    }[]
    pushNotification: PushNotificationMeta
}