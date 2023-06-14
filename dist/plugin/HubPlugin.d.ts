import { HubPluginVersion } from ".";
import { BlueprintMeta } from "..";
import { Image } from "..";
export interface HubPlugin {
    id: string;
    author: string;
    name: string;
    title: string;
    content: string;
    body: string;
    active?: boolean;
    description?: string;
    version: string;
    image: Image | undefined;
    logo: string;
    platform?: string;
    website?: string;
    size?: number;
    language?: string;
    repository?: string;
    contactName?: string;
    contactEmail?: string;
    license?: string;
    privacyPolicy?: string;
    hubPluginVersions: HubPluginVersion[];
    rootBlueprints: BlueprintMeta[];
    connectedBlueprints: BlueprintMeta[];
}
