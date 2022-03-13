import { Tile } from '.'
import { Profile } from '..'
import { Site } from '..'
import { User } from '..'

export interface TileInvitation {
    id: string
    status: string

    tile: Tile
    user: User
    invitee: User

    createdAt: string
    updatedAt: string
}