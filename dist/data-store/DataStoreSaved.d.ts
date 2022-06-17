import { DataStore } from ".";
import { PromptRecipient } from "../prompt";
export interface DataStoreSaved {
    id: string;
    filename: string;
    data: any;
    dataStore: DataStore;
    dataStoreId: string;
    promptRecipient: PromptRecipient;
    promptRecipientId: string;
    createdAt: string;
    updatedAt: string;
}
