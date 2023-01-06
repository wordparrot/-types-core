import {
  BlueprintEntityRequirementMap,
  BlueprintEntityRequirementType,
  BlueprintEntityRequirement,
} from ".";

// A list of common UUIDs to be found in pipeline nodes.
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
  "linkedNodeId",
  "csvId",
];

// These fields should be set to null when blueprints are exported, so they can be set by default by the installer.
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
  "credentialId",
  "credential",
];

// These fields should be hidden on the export sites page, but the last properties in the list should be preserved without changing.
export const excludedFieldValues: string[] = [
  ...entityIdNames,
  ...setToNull,
  "id",
  "title",
  "content",
  "type",
  "provider",
  "status",
  "nodeStatus",
  "provider",
  "createdAt",
  "updatedAt",
  "transformations",
  "linkedNode",
];

// These field types should be hidden on the export page.
export const excludedFieldTypes: string[] = [
  "jsonTransformation",
  "space",
  "header",
  "hideFields",
];

// These fields should be detected if they have a value, so that the user can be notified that certain entities must first be created before installing.
export const fieldsMappedToRequirements: Record<
  string,
  BlueprintEntityRequirementType
> = {
  credentialId: "credential",
  dataStoreId: "dataStore",
  repositoryId: "repository",
  csvId: "csv",
  csvReportId: "csvReport",
};

export const ignoreIfNotObject: string[] = ["values", "transformations"];

export const BlueprintExclusions = {
  entityIdNames,
  excludedFieldTypes,
  excludedFieldValues,
  ignoreIfNotObject,
  setToNull,
};

export const setBlueprintFieldsToNull = <T = any>(entity: T): T => {
  for (const prop in entity) {
    if (setToNull.includes(prop)) {
      entity[prop] = null;
    }
  }
  return entity;
};

export const createRequirementMap = <T = any>(
  entity: T,
  addedRequirements: BlueprintEntityRequirement[] = []
): BlueprintEntityRequirementMap => {
  const blueprintEntityRequirementMap: BlueprintEntityRequirementMap = {};

  for (const prop in entity) {
    if (fieldsMappedToRequirements[prop]) {
      blueprintEntityRequirementMap[prop] = {
        property: prop,
        requirement: fieldsMappedToRequirements[prop],
      };
    }
  }

  addedRequirements.forEach((requirement) => {
    blueprintEntityRequirementMap[requirement.property] = requirement;
  });

  return blueprintEntityRequirementMap;
};
