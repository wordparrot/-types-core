import { Listener } from ".";
export interface ListenerJob {
    id: string;
    listener?: Listener;
    listenerId: string;
    status: string;
    errors: Record<string, Record<string, any>>;
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
