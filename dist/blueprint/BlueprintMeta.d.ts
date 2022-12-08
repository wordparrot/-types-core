import { BlueprintPrice, BlueprintVersion } from ".";
import { HubPlugin, HubPluginVersion } from "../plugin";
export interface BlueprintMeta {
    id: string;
    title: string;
    content: string;
    body: string;
    type: string;
    status: string;
    categories: string[];
    official: boolean;
    renderOrder: boolean;
    rootPlugin: HubPlugin;
    rootPluginId: string;
    rootPluginVersion: HubPluginVersion;
    rootPluginVersionId: string;
    connectedPlugins: HubPlugin[];
    connectedPluginVersions: HubPluginVersion[];
    blueprintPrice: BlueprintPrice;
    blueprintPriceId: string;
    blueprintVersions: BlueprintVersion[];
    hubUser: any;
    hubUserId: string;
    author: any;
    authorId: string;
    contributors: any[];
    createdAt: string;
    updatedAt: string;
}
