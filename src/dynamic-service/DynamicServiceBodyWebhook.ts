import { 
    Request
} from 'express'

import { Webhook } from '..'

export interface DynamicServiceBodyWebhook {
    webhook: Webhook
    request: Request
    routeId?: string
    
    createdAt: string
}