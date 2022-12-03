import { BlueprintMeta } from "./BlueprintMeta";

export interface BlueprintStats {
  id: string;

  downloads: number;
  ranking: number;

  blueprintMeta: BlueprintMeta;
  blueprintMetaId: string;

  createdAt: string;
  updatedAt: string;
}
