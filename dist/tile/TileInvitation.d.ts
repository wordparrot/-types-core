import { Tile } from '.';
import { Profile } from '..';
export interface TileInvitation {
    id: string;
    tile?: Tile;
    tileId: string;
    userId: string;
    profile: Profile;
    inviteeId: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
