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

export const setToNull: string[] = [
  "id",
  "active",
  "status",
  "nodeStatus",
  "queueStatus",
  "createdAt",
  "updatedAt",
  "nextRun",
  "recordReports",
  "downstreamPipelines",
  "nodes",
  "dataStatus",
  "siteId",
  "userId",
];

export const setBlueprintFieldsToNull = <T>(entity: T): T => {
  for (const prop in entity) {
    if (setToNull.includes(prop)) {
      entity[prop] = null;
    }
  }
  return entity;
};

export const excludedFieldValues: string[] = [
  ...entityIdNames,
  ...setToNull,
  "title",
  "content",
  "type",
  "provider",
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
  entityIdNames,
  excludedFieldTypes,
  excludedFieldValues,
  ignoreIfNotObject,
  setToNull,
};
