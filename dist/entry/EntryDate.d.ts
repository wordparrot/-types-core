import { Entry } from '.';
export interface EntryDate {
    date: string;
    daysSinceEpoch: number;
    tags: string[];
    entries: Entry[];
    border?: boolean;
    carryingEntryIndex: number;
    lastEntryIndex: number;
}
