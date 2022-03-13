import { Tile } from '.';
import { Site } from '..';
import { User } from '..';
export interface TileSubscription {
    id: string;
    status: string;
    tile: Tile;
    site: Site;
    user: User;
    createdAt: string;
    updatedAt: string;
}
