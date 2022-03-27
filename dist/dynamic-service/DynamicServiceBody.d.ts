import { DynamicServiceBodyAuth, DynamicServiceBodyPlugin, DynamicServiceBodyPipeline, DynamicServiceBodyParameters, DynamicServiceBodyRun, DynamicServiceBodySite } from ".";
export interface DynamicServiceBody {
    run: DynamicServiceBodyRun;
    plugin: DynamicServiceBodyPlugin;
    pipeline: DynamicServiceBodyPipeline;
    auth: DynamicServiceBodyAuth;
    site: DynamicServiceBodySite;
    parameters: DynamicServiceBodyParameters;
}
