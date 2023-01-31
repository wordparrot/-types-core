"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequirementMap = exports.setBlueprintFieldsToUndefined = exports.BlueprintExclusions = exports.ignoreIfNotObject = exports.fieldsMappedToRequirements = exports.excludedFieldTypes = exports.excludedFieldValues = exports.setToUndefined = void 0;
// A list of common UUIDs to be found in pipeline nodes.
const excludedEntityIds = [
    "promptId",
    "chartId",
    "siteId",
    "userId",
    "projectId",
    "pipelineGroupId",
    "policyId",
    "pipelineId",
    "categoryId",
    "subcategoryId",
    "featuredGroupId",
    "linkedNodeId",
    "repositoryTagIds",
    "repositoryItemId",
    "parentNodeId",
    "linkedNodeId",
];
const nonExcludedEntityIds = [
    "credentialId",
    "dataStoreId",
    "repositoryId",
    "csvId",
    "csvReportId",
];
// These fields should be set to undefined when blueprints are exported, so they can be set by default by the installer.
exports.setToUndefined = [
    ...excludedEntityIds,
    ...nonExcludedEntityIds,
    "id",
    "pipelines",
    "downstreamPipelines",
    "upstreamPipelineNodes",
    "nodes",
    "credential",
    "csv",
    "dataStore",
    "csvReport",
    "repository",
    "createdAt",
    "updatedAt",
    "nextRun",
    "recordReports",
    "queueStatus",
    "dataStatus",
];
// These fields should be hidden on the export sites page, but the last properties in the list should be preserved without changing.
exports.excludedFieldValues = [
    ...excludedEntityIds,
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
exports.excludedFieldTypes = [
    "jsonTransformation",
    "space",
    "header",
    "hideFields",
    "jsonSchemaForm",
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
    excludedEntityIds,
    excludedFieldTypes: exports.excludedFieldTypes,
    excludedFieldValues: exports.excludedFieldValues,
    ignoreIfNotObject: exports.ignoreIfNotObject,
    setToUndefined: exports.setToUndefined,
};
const setBlueprintFieldsToUndefined = (entity) => {
    for (const prop in entity) {
        if (exports.setToUndefined.includes(prop)) {
            entity[prop] = undefined;
        }
    }
    return entity;
};
exports.setBlueprintFieldsToUndefined = setBlueprintFieldsToUndefined;
const createRequirementMap = (entity, addedRequirements = []) => {
    var _a, _b;
    const blueprintEntityRequirementMap = {};
    for (const prop in entity) {
        if (!exports.fieldsMappedToRequirements[prop]) {
            continue;
        }
        if (!!entity[prop]) {
            // Value must be truthy
            blueprintEntityRequirementMap[prop] = {
                property: prop,
                requirement: exports.fieldsMappedToRequirements[prop],
            };
            // If there is both ID and related entity, get the related entity's provider value.
            // This is most useful for credentials.
            if (prop.endsWith("Id")) {
                const relatedEntityName = prop.replace("Id", "");
                if (entity[relatedEntityName] && ((_a = entity[relatedEntityName]) === null || _a === void 0 ? void 0 : _a.provider)) {
                    blueprintEntityRequirementMap[prop].provider =
                        (_b = entity[relatedEntityName]) === null || _b === void 0 ? void 0 : _b.provider;
                }
            }
        }
    }
    addedRequirements.forEach((requirement) => {
        blueprintEntityRequirementMap[requirement.property] = requirement;
    });
    return blueprintEntityRequirementMap;
};
exports.createRequirementMap = createRequirementMap;
