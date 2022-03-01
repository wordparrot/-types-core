import { RepositoryTag, RepositoryItem } from ".";
export interface Repository {
    id?: string;
    title: string;
    content: string;
    pipelines: any[];
    repositoryTags: RepositoryTag[];
    repositoryItems: RepositoryItem[];
}
