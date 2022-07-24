"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterHttpRequests = exports.isValidHttpRequestFormat = exports.HttpRequestFormatMethod = void 0;
var HttpRequestFormatMethod;
(function (HttpRequestFormatMethod) {
    HttpRequestFormatMethod["GET"] = "get";
    HttpRequestFormatMethod["POST"] = "post";
    HttpRequestFormatMethod["PUT"] = "put";
    HttpRequestFormatMethod["PATCH"] = "patch";
    HttpRequestFormatMethod["DELETE"] = "delete";
    HttpRequestFormatMethod["HEAD"] = "head";
    HttpRequestFormatMethod["OPTIONS"] = "options";
})(HttpRequestFormatMethod = exports.HttpRequestFormatMethod || (exports.HttpRequestFormatMethod = {}));
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
