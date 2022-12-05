import { BlueprintStructure, BlueprintMeta } from ".";
export interface BlueprintFile {
    id: string;
    current: boolean;
    version: string;
    blueprint: BlueprintStructure;
    blueprintMeta: BlueprintMeta;
    blueprintMetaId: string;
    createdAt: string;
    updatedAt: string;
}
