import { DataStore } from ".";
export interface DataStoreSaved {
    id: string;
    filename: string;
    data: any;
    DataStore: DataStore;
    DataStoreId: string;
    createdAt: string;
    updatedAt: string;
}
