import { PipelineMessage } from "..";
import { FileMetadata } from "..";
import { RepositoryItem } from "..";
import { PipelineToken } from "..";
import { CsvMetadata } from "..";
export interface DynamicServiceBodyByProvider {
    messages?: PipelineMessage[];
    csv?: CsvMetadata[];
    fileMetadata?: FileMetadata[];
    items?: RepositoryItem[];
    json?: any[];
    tokens?: PipelineToken[];
    entries?: any[];
}
