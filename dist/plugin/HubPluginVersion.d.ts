import { PluginCondensed } from ".";
import { BlueprintVersion } from '..';
export interface HubPluginVersion {
    id: string;
    folderName: string;
    fileName: string;
    version: string;
    condensed: PluginCondensed;
    hubPluginId: string;
    rootBlueprintVersions: BlueprintVersion[];
    blueprintVersions: BlueprintVersion[];
    createdAt: string;
    updatedAt: string;
}
