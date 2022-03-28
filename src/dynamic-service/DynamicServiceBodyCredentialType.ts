import { 
  DynamicServiceBodyPlugin, 
  DynamicServiceBodyRun,
  DynamicServiceBodySite,
  DynamicServiceBodyAuth
} from ".";
import {  } from ".";

export interface DynamicServiceBodyCredentialType {
  run: DynamicServiceBodyRun
  plugin: DynamicServiceBodyPlugin
  auth: DynamicServiceBodyAuth
  site: DynamicServiceBodySite
}