import { BlueprintEntity } from "..";
import { PromptInitialValues } from "..";
export interface BlueprintPrompt<P = string> extends BlueprintEntity {
    initialValues: PromptInitialValues<P>;
}
