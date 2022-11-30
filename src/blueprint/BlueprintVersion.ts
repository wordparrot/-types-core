import { Blueprint } from "./Blueprint";
import { BlueprintMeta } from "./BlueprintMeta";

export interface BlueprintVersion {
  id: string;
  title: string;
  content: string;
  status: String;
  value: string;
  current: boolean;

  blueprint: Blueprint;

  meta: BlueprintMeta;
  metaId: string;

  createdAt: string;
  updatedAt: string;
}
