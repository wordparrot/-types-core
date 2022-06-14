export type POLICY_TYPE = "append" | "prepend" | "replace" | "merge";

export interface DynamicServiceOutputPolicy {
  jsonToPassOn?: POLICY_TYPE;
  csvToPassOn?: POLICY_TYPE;
  promptsToPassOn?: POLICY_TYPE;
  emailMetadataToPassOn: POLICY_TYPE;
  fileMetadataToPassOn: POLICY_TYPE;
  itemsToPassOn: POLICY_TYPE;
}
