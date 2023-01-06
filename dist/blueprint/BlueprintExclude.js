"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequirementMap = exports.setBlueprintFieldsToNull = exports.BlueprintExclusions = exports.ignoreIfNotObject = exports.fieldsMappedToRequirements = exports.excludedFieldTypes = exports.excludedFieldValues = exports.setToNull = void 0;
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
exports.setToNull = [
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
// These fields should be hidden on the export sites page, but the last properties in the list should be preserved without changing.
exports.excludedFieldValues = [
    ...entityIdNames,
    ...exports.setToNull,
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
exports.excludedFieldTypes = [
    "jsonTransformation",
    "space",
    "header",
    "hideFields",
];
// These fields should be detected if they have a value, so that the user can be notified that certain entities must first be created before installing.
exports.fieldsMappedToRequirements = {
    credentialId: "credential",
    dataStoreId: "dataStore",
    repositoryId: "repository",
    csvId: "csv",
    csvReportId: "csvReport",
};
exports.ignoreIfNotObject = ["values", "transformations"];
exports.BlueprintExclusions = {
    entityIdNames,
    excludedFieldTypes: exports.excludedFieldTypes,
    excludedFieldValues: exports.excludedFieldValues,
    ignoreIfNotObject: exports.ignoreIfNotObject,
    setToNull: exports.setToNull,
};
const setBlueprintFieldsToNull = (entity) => {
    for (const prop in entity) {
        if (exports.setToNull.includes(prop)) {
            entity[prop] = null;
        }
    }
    return entity;
};
exports.setBlueprintFieldsToNull = setBlueprintFieldsToNull;
const createRequirementMap = (entity) => {
    const blueprintEntityRequirementMap = {};
    for (const prop in entity) {
        if (exports.fieldsMappedToRequirements[prop]) {
            blueprintEntityRequirementMap[prop] = {
                property: prop,
                requirement: exports.fieldsMappedToRequirements[prop],
            };
        }
    }
    return blueprintEntityRequirementMap;
};
exports.createRequirementMap = createRequirementMap;
