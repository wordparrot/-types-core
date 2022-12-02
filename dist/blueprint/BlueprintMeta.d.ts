import { BlueprintPrice, BlueprintVersion } from ".";
export interface BlueprintMeta {
    id: string;
    title: string;
    content: string;
    type: string;
    status: string;
    official: boolean;
    renderOrder: boolean;
    rootPlugin: any;
    rootPluginId: string;
    connectedPlugins: any[];
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
