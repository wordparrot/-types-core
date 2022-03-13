import { Site } from '..'

export interface Social {
    id: string
    facebook: string
    instagram: string
    linkedin: string
    twitter: string
    github: string

    site: Site

    createdAt: string
    updatedAt: string
}