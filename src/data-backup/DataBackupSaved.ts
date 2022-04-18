import { DataBackup } from ".";

export interface DataBackupSaved {
  id: string;
  filename: string;
  data: any;

  dataBackup: DataBackup;
  dataBackupId: string;

  createdAt: string;
  updatedAt: string;
}
