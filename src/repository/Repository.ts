import { RepositoryTag, RepositoryItem } from ".";
import { Tile } from "..";
import { Role } from "..";
import { Site } from "..";
import { User } from "..";

export interface Repository {
  id: string;
  banner: string;
  title: string;
  content: string;

  repositoryTags: RepositoryTag[];
  repositoryItems: RepositoryItem[];
  tiles: Tile[];
  roles: Role[];
  site: Site;
  user: User;

  createdAt: string;
  updatedAt: string;
}
