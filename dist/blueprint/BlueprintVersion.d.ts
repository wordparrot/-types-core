import { BlueprintStructure } from "./BlueprintStructure";
import { BlueprintMeta } from "./BlueprintMeta";
export interface BlueprintVersion {
    id: string;
    title: string;
    content: string;
    status: String;
    value: string;
    current: boolean;
    blueprint: BlueprintStructure;
    blueprintMeta: BlueprintMeta;
    blueprintMetaId: string;
    createdAt: string;
    updatedAt: string;
}
