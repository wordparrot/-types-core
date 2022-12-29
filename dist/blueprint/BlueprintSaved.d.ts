import { BlueprintStructure } from "./BlueprintStructure";
export interface BlueprintSaved {
    id: string;
    title: string;
    content: string;
    status: string;
    version: string;
    structure: BlueprintStructure;
    preExport: any;
    projectId: string;
    exportId: string;
    createdAt: string;
    updatedAt: string;
}
