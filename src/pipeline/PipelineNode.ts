import { Pipeline, PipelineNodeCondition } from ".";
import { Repository, RepositoryTag } from "..";
import { FeaturedThread } from "..";
import { Credential } from "..";
import { Category } from "..";
import { FeaturedGroup } from "..";
import { Subcategory } from "..";
import { Entry } from "..";
import { JsonTransformation } from "..";
import { Csv } from "..";
import { CsvReport } from "..";
import { DataStore } from "..";
import { Prompt } from "..";
import { Image } from "..";
import { AbstractPipelineNode } from ".";

export interface PipelineNode extends AbstractPipelineNode {
  transformations: JsonTransformation[];

  pipeline: Pipeline;
  pipelineId: string;

  linkedNode: PipelineNode;
  linkedNodeId: string;

  csv: Csv;
  csvId: string;

  prompt: Prompt;
  promptId: string;

  csvReport: CsvReport;
  csvReportId: string;

  dataStore: DataStore;
  dataStoreId: string;

  images: Image[];
  imageIds: string[];

  category: Category;
  subcategory: Subcategory;
  featuredGroup: FeaturedGroup;
  featuredGroupId: string;
  featuredThreads: FeaturedThread[];
  featuredThreadIds: string[];
  repository: Repository;
  repositoryId: string;
  repositoryTagIds: string[];
  parentNode: PipelineNode;
  parentNodeId: string;
  childNodes: PipelineNode[];
  conditions: PipelineNodeCondition[];
  entries: Entry[];
}
