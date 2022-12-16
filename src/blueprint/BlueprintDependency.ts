export type BlueprintDependencyMessage = "update" | "install" | "ok";
export type BlueprintDependencyStatus =
  | "current"
  | "pending"
  | "installing"
  | "completed"
  | "failed";

export interface BlueprintDependency {
  hubPluginId: string;
  hubPluginVersionId: string;
  title: string;
  content: string;
  name: string;
  author: string;
  version: string;
  message: BlueprintDependencyMessage;
  status?: BlueprintDependencyStatus;
  imageUrl?: string;
  createdAt?: string;
  previousVersion?: string;
}
