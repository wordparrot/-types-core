const entityIdNames = [
  "dataStoreId",
  "promptId",
  "chartId",
  "csvReportId",
  "dataStoreId",
  "chartId",
  "userId",
  "projectId",
  "pipelineGroupId",
  "credentialId",
  "policyId",
  "pipelineId",
  "categoryId",
  "subcategoryId",
  "featuredGroupId",
  "linkedNodeId",
  "repositoryId",
  "repositoryTagIds",
  "parentNodeId",
  "csvId",
];

export const excludedFieldValues: string[] = [
  ...entityIdNames,
  "id",
  "title",
  "content",
  "type",
  "status",
  "nodeStatus",
  "provider",
  "createdAt",
  "updatedAt",
  "transformations",
];

export const excludedFieldTypes: string[] = [
  "jsonTransformation",
  "space",
  "header",
  "hideFields",
];

export const ignoreIfNotObject: string[] = ["values", "transformations"];

export const BlueprintExclusions = {
  excludedFieldTypes,
  excludedFieldValues,
  ignoreIfNotObject,
};
