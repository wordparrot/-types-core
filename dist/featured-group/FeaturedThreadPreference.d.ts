import { FeaturedThread } from "./FeaturedThread";
import { User } from '..';
import { Site } from '..';
import { Pipeline } from '..';
import { Repository, RepositoryTag } from '..';
export interface FeaturedThreadPreference {
    id: string;
    type: string;
    userId: string;
    user: User;
    featuredThread: FeaturedThread;
    site: Site;
    pipeline: Pipeline;
    pipelineId: string;
    repository: Repository;
    repositoryId: string;
    repositoryTags: RepositoryTag[];
    createdAt: string;
    updatedAt: string;
}
