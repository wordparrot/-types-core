import { BlueprintPipeline } from "./BlueprintPipeline";
import { BlueprintPlugin } from "./BlueprintPlugin";

export interface Blueprint {
  title: string;
  content: string;
  author: string;

  pipelineGroupTitle?: string;

  plugins: BlueprintPlugin[];
  pipelines: BlueprintPipeline[];
}
