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
    "credentialId",
    "credential",
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
const createRequirementMap = (entity, addedRequirements = []) => {
    var _a, _b;
    const blueprintEntityRequirementMap = {};
    for (const prop in entity) {
        if (!exports.fieldsMappedToRequirements[prop]) {
            continue;
        }
        if (!!(entity[prop])) {
            // Value must be truthy
            blueprintEntityRequirementMap[prop] = {
                property: prop,
                requirement: exports.fieldsMappedToRequirements[prop],
            };
            // If there is both ID and related entity, get the related entity's provider value.
            // This is most useful for credentials.
            if (prop.endsWith('Id')) {
                const relatedEntityName = prop.replace('Id', '');
                if (entity[relatedEntityName] && ((_a = entity[relatedEntityName]) === null || _a === void 0 ? void 0 : _a.provider)) {
                    blueprintEntityRequirementMap[prop].provider = (_b = entity[relatedEntityName]) === null || _b === void 0 ? void 0 : _b.provider;
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
