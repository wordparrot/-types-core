export interface BlueprintRequirement {
    hubPluginId: string;
    title: string;
    content: string;
    author: string;
    version: string;
    previousVersion: string;
    message: "update" | "install" | "ok";
}
