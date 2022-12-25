import { BlueprintEntity, ValidationSchemaItem } from "..";
import { FieldItem } from "..";
import { PromptInitialValues } from "..";

export interface BlueprintPrompt<P = string> extends BlueprintEntity {
  initialValues: PromptInitialValues<P>;
}
