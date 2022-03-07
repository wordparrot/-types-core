import { EntryItem } from ".";
export interface EntryItemDownload {
    id: string;
    ip: string;
    recorded: Boolean;
    date: number;
    item: EntryItem;
    createdAt: string;
    updatedAt: string;
}
