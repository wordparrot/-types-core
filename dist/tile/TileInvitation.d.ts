import { Tile } from '.';
import { User } from '..';
import { Profile } from '..';
export interface TileInvitation {
    id: string;
    status: string;
    tile: Tile;
    user: User;
    invitee: User;
    profile?: Profile;
    createdAt: string;
    updatedAt: string;
}
