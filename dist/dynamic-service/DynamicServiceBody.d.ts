import { DynamicServiceBodyPlugin, DynamicServiceBodyPipeline, DynamicServiceBodyInput, DynamicServiceBodyParameters, DynamicServiceBodyRun, DynamicServiceBodySite } from ".";
export interface DynamicServiceBody {
    run: DynamicServiceBodyRun;
    plugin: DynamicServiceBodyPlugin;
    pipeline: DynamicServiceBodyPipeline;
    site: DynamicServiceBodySite;
    input: DynamicServiceBodyInput;
    parameters: DynamicServiceBodyParameters;
}
