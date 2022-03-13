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
    user: User;
    subscriptions: TileSubscription[];
    invitations: TileInvitation[];
    createdAt: string;
    updatedAt: string;
}
