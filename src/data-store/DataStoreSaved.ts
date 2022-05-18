import { DataStore } from ".";

export interface DataStoreSaved {
  id: string;
  filename: string;
  data: any;

  dataStore: DataStore;
  dataStoreId: string;

  createdAt: string;
  updatedAt: string;
}
