import { BlueprintMeta } from ".";

export interface BlueprintPrice {
  id: string;
  title: string;
  content: string;
  type: string;
  currency: string;
  value: number;
  blueprints: any[];

  blueprintMeta: BlueprintMeta;
  blueprintMetaId: string;

  createdAt: string;
  updatedAt: string;
}
