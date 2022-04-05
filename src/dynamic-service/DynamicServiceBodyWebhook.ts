import { 
    Request
} from 'express'

import { Webhook } from '..'

export interface DynamicServiceBodyWebhook {
    webhook: Webhook
    request: Request
    createdAt: string
}