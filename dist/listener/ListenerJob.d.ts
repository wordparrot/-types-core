import { Listener } from ".";
export interface ListenerJob {
    id: string;
    listener?: Listener;
    listenerId: string;
    status: string;
    errors: Record<string, Record<string, unknown>>;
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
