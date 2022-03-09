import { FeaturedGroup } from ".."
import { User } from '..'

export interface FeaturedInvitation {
    id: string
    status: string

    featuredGroup: FeaturedGroup
    user: User
    invitee: User
    
    createdAt: string
    updatedAt: string
}