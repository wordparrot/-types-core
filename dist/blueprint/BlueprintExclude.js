"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintExclusions = exports.ignoreIfNotObject = exports.excludedFieldTypes = exports.excludedFieldValues = exports.setBlueprintFieldsToNull = exports.setToNull = void 0;
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
const setBlueprintFieldsToNull = (entity) => {
    for (const prop in entity) {
        if (exports.setToNull.includes(prop)) {
            entity[prop] = null;
        }
    }
    return entity;
};
exports.setBlueprintFieldsToNull = setBlueprintFieldsToNull;
exports.excludedFieldValues = [
    ...entityIdNames,
    ...exports.setToNull,
    "title",
    "content",
    "type",
    "provider",
    "transformations",
];
exports.excludedFieldTypes = [
    "jsonTransformation",
    "space",
    "header",
    "hideFields",
];
exports.ignoreIfNotObject = ["values", "transformations"];
exports.BlueprintExclusions = {
    entityIdNames,
    excludedFieldTypes: exports.excludedFieldTypes,
    excludedFieldValues: exports.excludedFieldValues,
    ignoreIfNotObject: exports.ignoreIfNotObject,
    setToNull: exports.setToNull,
};
