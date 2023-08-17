import { PipelineNode, PipelineJob } from ".";
import { FeaturedThreadRelease } from "..";
import { RepositoryItem } from "..";
import { RepositoryFile } from "..";
import { Repository } from "..";
import { RepositoryHistory } from "..";
import { User } from '..';
import { CsvReport } from "..";
import { Csv } from "..";
import { DataStore } from "..";
export interface PipelineFlow {
    id: string;
    pipelineJob: PipelineJob;
    pipelineJobId: string;
    pipelineNode: PipelineNode;
    featuredThreadRelease: FeaturedThreadRelease;
    repository: Repository;
    repositoryId: string;
    repositoryFiles: RepositoryFile[];
    repositoryItems: RepositoryItem[];
    dataStores: DataStore[];
    csv: Csv[];
    csvReports: CsvReport[];
    repositoryHistory: RepositoryHistory;
    user: User;
    createdAt?: string;
    updatedAt?: string;
}
