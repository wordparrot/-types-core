import {
  DynamicServiceBodyAuth,
  DynamicServiceBodyPlugin,
  DynamicServiceBodyPipeline,
  DynamicServiceBodyParameters,
  DynamicServiceBodyRun,
  DynamicServiceBodySite,
  DynamicServiceBodyWebhook,
  DynamicServiceBodyListener,
} from ".";
import { SandboxLib } from "..";

export interface DynamicServiceBody {
  run: DynamicServiceBodyRun;
  plugin: DynamicServiceBodyPlugin;
  pipeline: DynamicServiceBodyPipeline;
  auth: DynamicServiceBodyAuth;
  site: DynamicServiceBodySite;
  parameters: DynamicServiceBodyParameters;
  webhook: DynamicServiceBodyWebhook;
  listener: DynamicServiceBodyListener;
  lib?: SandboxLib;
}

export interface DynamicServiceBodyWithLib extends DynamicServiceBody {
  lib: SandboxLib;
}
