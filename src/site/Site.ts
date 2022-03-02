import { Dns, Seo, Social, Theme } from '.'
import { Role } from '..'
import { Banner } from '..'
import { Category } from '..'
import { Storage } from '../storage/Storage'

export interface Site {
    id: string
    clientId?: string
    defaultSubdomain: string
    domain: string
    domainApproved: boolean
    authScheme: string
  
    title: string
    content?: string
    organization?: string
    website?: string
    searchPlaceholder?: string
  
    logo?: string
    logoApproved?: boolean
    favicon: string
  
    enableCommunication?: boolean
    communicationEmail?: string
  
    dns: Dns
    seo: Seo
    social: Social
    theme: Theme
    storage: Storage
    banners?: Banner[]
    roles?: Role[]
  
    locked?: boolean
    banned?: boolean
    createdAt?: string
    updatedAt?: string
    categories?: Category[]
}