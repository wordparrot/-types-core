import { RepositoryTag, RepositoryItem } from ".";
import { CsvReport, Tile } from "..";
import { Csv } from "..";
import { User } from "..";
import { DataStore } from "..";
export interface Repository {
    id: string;
    banner: string;
    title: string;
    content: string;
    repositoryTags: RepositoryTag[];
    repositoryItems: RepositoryItem[];
    dataStores: DataStore[];
    csv: Csv[];
    csvReports: CsvReport[];
    tiles: Tile[];
    user: User;
    userId: string;
    createdAt: string;
    updatedAt: string;
}
