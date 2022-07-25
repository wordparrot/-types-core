"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCallbackStatus = void 0;
var AuthCallbackStatus;
(function (AuthCallbackStatus) {
    AuthCallbackStatus["UNVERIFIED"] = "unverified";
    AuthCallbackStatus["VALID"] = "valid";
    AuthCallbackStatus["INVALID"] = "invalid";
    AuthCallbackStatus["EXPIRED"] = "expired";
    AuthCallbackStatus["REVOKED"] = "revoked";
})(AuthCallbackStatus = exports.AuthCallbackStatus || (exports.AuthCallbackStatus = {}));
