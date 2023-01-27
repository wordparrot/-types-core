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
  "dataStoreId",
];

// These fields should be set to undefined when blueprints are exported, so they can be set by default by the installer.
export const setToUndefined: string[] = [
  "id",
  "downstreamPipelines",
  "nodes",
  "siteId",
  "userId",
  "parentNodeId",
  "pipelineId",
  "pipelineGroupId",
  "dataStoreId",
  "repositoryId",
  "repositoryItemId",
  "projectId",
  "credentialId",
  "credential",
  "createdAt",
  "csvId",
  "csvReportId",
  "updatedAt",
  "nextRun",
  "recordReports",
  "queueStatus",
  "dataStatus",
];

// These fields should be hidden on the export sites page, but the last properties in the list should be preserved without changing.
export const excludedFieldValues: string[] = [
  ...entityIdNames,
  ...setToUndefined,
  "id",
  "type",
  "provider",
  "createdAt",
  "updatedAt",
  "transformations",
  "linkedNode",
  "namespace",
];

// These field types should be hidden on the export page.
export const excludedFieldTypes: string[] = [
  "jsonTransformation",
  "space",
  "header",
  "hideFields",
  "jsonSchemaForm",
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
  setToUndefined,
};

export const setBlueprintFieldsToUndefined = <T = any>(entity: T): T => {
  for (const prop in entity) {
    if (setToUndefined.includes(prop)) {
      entity[prop] = undefined;
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
    if (!fieldsMappedToRequirements[prop]) {
      continue;
    }

    if (!!entity[prop]) {
      // Value must be truthy
      blueprintEntityRequirementMap[prop] = {
        property: prop,
        requirement: fieldsMappedToRequirements[prop],
      };

      // If there is both ID and related entity, get the related entity's provider value.
      // This is most useful for credentials.
      if (prop.endsWith("Id")) {
        const relatedEntityName = prop.replace("Id", "");
        if (entity[relatedEntityName] && entity[relatedEntityName]?.provider) {
          blueprintEntityRequirementMap[prop].provider =
            entity[relatedEntityName]?.provider;
        }
      }
    }
  }

  addedRequirements.forEach((requirement) => {
    blueprintEntityRequirementMap[requirement.property] = requirement;
  });

  return blueprintEntityRequirementMap;
};
