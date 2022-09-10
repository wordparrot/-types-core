"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineNodeConditionComparator = exports.PipelineNodeConditionSubject = exports.PipelineNodeConditionPolicy = void 0;
var PipelineNodeConditionPolicy;
(function (PipelineNodeConditionPolicy) {
    PipelineNodeConditionPolicy["AND"] = "AND";
    PipelineNodeConditionPolicy["OR"] = "OR";
    PipelineNodeConditionPolicy["XOR"] = "XOR";
})(PipelineNodeConditionPolicy = exports.PipelineNodeConditionPolicy || (exports.PipelineNodeConditionPolicy = {}));
var PipelineNodeConditionSubject;
(function (PipelineNodeConditionSubject) {
    PipelineNodeConditionSubject["ITEMS"] = "ITEMS";
    PipelineNodeConditionSubject["FILES"] = "FILES";
    PipelineNodeConditionSubject["JSON"] = "JSON";
    PipelineNodeConditionSubject["CSV"] = "CSV";
    PipelineNodeConditionSubject["PROMPTS"] = "PROMPTS";
})(PipelineNodeConditionSubject = exports.PipelineNodeConditionSubject || (exports.PipelineNodeConditionSubject = {}));
var PipelineNodeConditionComparator;
(function (PipelineNodeConditionComparator) {
    PipelineNodeConditionComparator["LESS_THAN"] = "LESS_THAN";
    PipelineNodeConditionComparator["LESS_THAN_OR_EQUALS"] = "LESS_THAN_OR_EQUALS";
    PipelineNodeConditionComparator["EQUALS"] = "EQUALS";
    PipelineNodeConditionComparator["GREATER_THAN"] = "GREATER_THAN";
    PipelineNodeConditionComparator["GREATER_THAN_OR_EQUALS"] = "GREATER_THAN_OR_EQUALS";
    PipelineNodeConditionComparator["CONTAINS"] = "CONTAINS";
    PipelineNodeConditionComparator["BEFORE"] = "BEFORE";
    PipelineNodeConditionComparator["AFTER"] = "AFTER";
})(PipelineNodeConditionComparator = exports.PipelineNodeConditionComparator || (exports.PipelineNodeConditionComparator = {}));
