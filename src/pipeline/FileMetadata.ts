import { WriteFileOptions } from "fs";
export interface FileMetadata {
  uniqId: string;
  path: string;
  filename: string;
  buffer?: Buffer;
  type?: string;
  mimeType?: string;
  encoding?: WriteFileOptions;
  pipelineJobId: string;
  pipelineNodeId: string;
  repositoryId?: string;
  repositoryFileId?: string;
  parentRepositoryItem?: {
    nodeUniqId: string;
    uniqId: string;
  };
}
