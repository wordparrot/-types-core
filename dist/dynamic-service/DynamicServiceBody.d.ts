import { DynamicServiceBodyAuth, DynamicServiceBodyPlugin, DynamicServiceBodyPipeline, DynamicServiceBodyParameters, DynamicServiceBodyRun, DynamicServiceBodySite, DynamicServiceBodyWebhook } from ".";
export interface DynamicServiceBody {
    run: DynamicServiceBodyRun;
    plugin: DynamicServiceBodyPlugin;
    pipeline: DynamicServiceBodyPipeline;
    auth: DynamicServiceBodyAuth;
    site: DynamicServiceBodySite;
    parameters: DynamicServiceBodyParameters;
    webhook?: DynamicServiceBodyWebhook;
}
