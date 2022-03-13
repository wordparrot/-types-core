import { Site } from '..';
import { Entry } from '..';
import { User } from '..';
export interface Bookmark {
    id: string;
    site?: Site;
    entry?: Entry;
    entryId: string;
    user?: User;
    repositoryItemId: string;
    createdAt: string;
    updatedAt: string;
}
