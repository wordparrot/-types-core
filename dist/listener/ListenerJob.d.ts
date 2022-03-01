import { Listener } from ".";
import { PluginError } from "../plugin";
export interface ListenerJob {
    id: string;
    listener?: Listener;
    listenerId: string;
    status: string;
    errors: Record<string, {
        listenerId: string;
        message: string;
        listener: Listener;
        messages?: PluginError;
    }>;
    completedAt: string;
    createdAt: string;
    updatedAt: string;
}
