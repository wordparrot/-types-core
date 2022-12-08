import { BlueprintInstallation } from ".";
export interface Blueprint {
    id: string;
    status: string;
    hubBlueprintMetaId: string;
    hubBlueprintVersionId: string;
    blueprintInstallations: BlueprintInstallation[];
    createdAt: string;
    updatedAt: string;
}
