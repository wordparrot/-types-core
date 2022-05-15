import { BlueprintPipeline } from "./BlueprintPipeline";
import { BlueprintPlugin } from "./BlueprintPlugin";
export interface Blueprint {
    title: string;
    content: string;
    author: string;
    pipelineGroupTitle?: string;
    dependencies?: BlueprintPlugin[];
    pipelines: BlueprintPipeline[];
}
