import { 
  DynamicServiceBodyPlugin, 
  DynamicServiceBodyPipeline,
  DynamicServiceBodyInput,
  DynamicServiceBodyParameters,
  DynamicServiceBodySite
} from ".";

export interface DynamicServiceBody {
    plugin: DynamicServiceBodyPlugin
    pipeline: DynamicServiceBodyPipeline
    site: DynamicServiceBodySite
    input: DynamicServiceBodyInput
    parameters: DynamicServiceBodyParameters
}