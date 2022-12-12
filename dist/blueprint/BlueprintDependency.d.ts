export declare type BlueprintDependencyMessage = "update" | "install" | "ok";
export interface BlueprintDependency {
    hubPluginId: string;
    hubPluginVersionId: string;
    title: string;
    content: string;
    name: string;
    author: string;
    version: string;
    message: BlueprintDependencyMessage;
    imageUrl?: string;
    createdAt?: string;
    previousVersion?: string;
}
