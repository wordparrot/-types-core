import { RepositoryTag } from "..";
export interface FeaturedThreadPreference {
    type: string;
    userId: string;
    pipelineId?: string;
    repositoryId?: string;
    repositoryTagIds?: string[];
    repositoryTags?: RepositoryTag[];
}
