import { DynamicServiceBodyAuth, DynamicServiceBodyPlugin, DynamicServiceBodyRun, DynamicServiceBodySite, DynamicServiceBodyListener } from ".";
export interface DynamicServiceBodyListenerType {
    run: DynamicServiceBodyRun;
    plugin: DynamicServiceBodyPlugin;
    listener: DynamicServiceBodyListener;
    auth: DynamicServiceBodyAuth;
    site: DynamicServiceBodySite;
}
