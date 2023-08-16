import { DataStore } from ".";
import { PromptRecipient } from "../prompt";
export interface DataStoreVersion {
    id: string;
    filename: string;
    data: any;
    dataStore: DataStore;
    dataStoreId: string;
    promptRecipient: PromptRecipient;
    promptRecipientId: string;
    pipelineJobId: string;
    createdAt: string;
    updatedAt: string;
}
