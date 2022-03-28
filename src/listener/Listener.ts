import { Pipeline } from '..'
import { Credential } from '..'
import { User } from '..'

export interface Listener {
    id: string;
    title: string;
    content: string;
    body: string;
    provider: string;
    status: string;
    queueStatus: string;
    pollDelay: number;
    recordJobs: boolean;
    values: Record<string, any>

    user: User
    pipelines: Pipeline[]
    credential: Credential

    createdAt: string;
    updatedAt: string;
}