"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintExclusions = exports.ignoreIfNotObject = exports.excludedFieldTypes = exports.excludedFieldValues = void 0;
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
exports.excludedFieldValues = [
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
exports.excludedFieldTypes = [
    "jsonTransformation",
    "space",
    "header",
    "hideFields",
];
exports.ignoreIfNotObject = ["values", "transformations"];
exports.BlueprintExclusions = {
    excludedFieldTypes: exports.excludedFieldTypes,
    excludedFieldValues: exports.excludedFieldValues,
    ignoreIfNotObject: exports.ignoreIfNotObject,
};
