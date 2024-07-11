import { WriteFileOptions } from "fs";

export type FileMetadataContentFolder =
  | "images"
  | "media"
  | "temp"
  | "repositories";

export interface FileMetadata {
  uniqId: string;
  filename: string;
  path: string;
  header: string;
  caption: string;
  publicURL: string | null; // URL exposed to third party APIs for access or verification purposes.
  predefinedPath?: string; // Property lets you pre-define a folder where the application should look for this file.
  buffer?: Buffer;
  type?: string;
  mimeType?: string;
  encoding?: WriteFileOptions;
  pipelineJobId?: string;
  pipelineNodeId?: string;
  repositoryId?: string;
  repositoryFileId?: string;
  imageId?: string;
  contentFolder?: FileMetadataContentFolder;
  parentRepositoryItem?: {
    nodeUniqId: string;
    uniqId: string;
  };
  context?: Record<string, any>;
}
