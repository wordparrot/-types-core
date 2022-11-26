import { Blueprint } from '.';
export interface BlueprintFile {
    id: string;
    current: boolean;
    version: string;
    blueprint: Blueprint;
    createdAt: string;
    updatedAt: string;
}
