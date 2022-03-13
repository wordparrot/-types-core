import { RepositoryItem } from ".";
import { Repository } from ".";
export interface RepositoryTag {
    id: string;
    title: string;
    color: string;
    repository?: Repository;
    repositoryItems?: RepositoryItem[];
    createdAt: string;
    updatedAt: string;
}
