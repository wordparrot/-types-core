import { DynamicServiceBodyPlugin, DynamicServiceBodyRun, DynamicServiceBodySite, DynamicServiceBodyAuth } from ".";
export interface DynamicServiceBodyCredentialType {
    run: DynamicServiceBodyRun;
    plugin: DynamicServiceBodyPlugin;
    auth: DynamicServiceBodyAuth;
    site: DynamicServiceBodySite;
    values: Record<string, any>;
}
