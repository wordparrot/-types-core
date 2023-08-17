import { RepositoryTag, Repository, RepositoryItem } from ".";
import { PipelineJob } from "..";
import { Entry } from "..";
import { PipelineFlow } from "..";

export interface RepositoryFile {
  id?: string;
  title?: string;
  content?: string;
  uniqId?: string;
  nodeUniqId?: string;
  type?: string;
  filename?: string;
  format?: string;
  provider?: string;
  platform?: string;
  path?: string;
  permalink?: string;
  url?: string;
  language?: string;

  pipelineJob?: PipelineJob;
  parentRepositoryItem?: RepositoryItem;
  entries?: Entry[];
  repositoryTags?: RepositoryTag[];

  repository?: Repository;
  repositoryId?: string;

  pipelineFlow?: string;
  pipelineFlowId?: string;

  createdAt?: string;
  updatedAt?: string;
}
