import { BlueprintPrice, BlueprintStats, BlueprintVersion } from ".";
import { HubPlugin } from "..";
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
    connectedPlugins: HubPlugin[];
    blueprintPrice: BlueprintPrice;
    blueprintPriceId: string;
    versions: BlueprintVersion[];
    stats: BlueprintStats[];
    hubUser: any;
    hubUserId: string;
    hubPluginId?: any;
    hubPlugin?: HubPlugin;
    author: any;
    authorId: string;
    contributors: any[];
    createdAt: string;
    updatedAt: string;
}
