import { Profile } from "..";
import { Repository, RepositoryTag } from "..";
import { TileSubscription } from ".";
import { User } from '..';
import { TileInvitation } from "./TileInvitation";
export interface Tile {
    id: string;
    title: string;
    content: string;
    repository: Repository;
    repositoryTags: RepositoryTag[];
    repositoryTagIds: string[];
    user: User;
    subscriptions: TileSubscription[];
    invitations: TileInvitation[];
    profile: Profile;
    createdAt: string;
    updatedAt: string;
}
