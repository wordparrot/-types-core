import { BlueprintStructure } from ".";
import { BlueprintMeta } from ".";
import { HubPluginVersion } from "..";
export interface BlueprintVersion {
    id: string;
    title: string;
    content: string;
    status: String;
    version: string;
    current: boolean;
    blueprint: BlueprintStructure;
    blueprintMeta: BlueprintMeta;
    blueprintMetaId: string;
    rootPluginVersionId: string;
    rootPluginVersion: HubPluginVersion;
    connectedPluginVersions: HubPluginVersion[];
    createdAt: string;
    updatedAt: string;
}
