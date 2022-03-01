import { Profile } from "..";
import { Repository, RepositoryTag } from "..";
import { TileSubscription } from ".";
export interface Tile {
    id: string;
    title: string;
    content: string;
    subscriptions?: TileSubscription[];
    profile?: Profile;
    userId?: string;
    repositoryId: string;
    repository?: Repository;
    repositoryTagIds: string[];
    repositoryTags?: RepositoryTag[];
}
