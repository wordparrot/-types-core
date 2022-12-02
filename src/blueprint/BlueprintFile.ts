import { Blueprint, BlueprintMeta } from ".";

export interface BlueprintFile {
  id: string;
  current: boolean;
  version: string;
  blueprint: Blueprint;

  blueprintMeta: BlueprintMeta;
  blueprintMetaId: string;

  createdAt: string;
  updatedAt: string;
}
