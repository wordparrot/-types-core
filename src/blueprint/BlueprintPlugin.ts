export interface BlueprintPlugin {
  hubPluginId: string;
  hubPluginVersionId?: string;
  name: string;
  author: string;
  version: string;
  source?: string;
}
