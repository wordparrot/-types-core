"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterHttpRequests = exports.isValidHttpRequestFormat = void 0;
const isValidHttpRequestFormat = (json) => {
    if (typeof json !== "object") {
        return false;
    }
    if (typeof json.params !== "object") {
        return false;
    }
    if (typeof json.query !== "object") {
        return false;
    }
    if (typeof json.body !== "object") {
        return false;
    }
    return true;
};
exports.isValidHttpRequestFormat = isValidHttpRequestFormat;
const filterHttpRequests = (jsonArray) => {
    if (!Array.isArray(jsonArray)) {
        return jsonArray;
    }
    return jsonArray.filter(exports.isValidHttpRequestFormat);
};
exports.filterHttpRequests = filterHttpRequests;
