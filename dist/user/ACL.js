"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACL = void 0;
var ACL;
(function (ACL) {
    // Super user permission
    ACL["ADMIN_SUPER"] = "admin.super";
    // Dashboard ACL
    ACL["DASHBOARD_READ"] = "dashboard.read";
    // Project ACL
    ACL["PROJECT_READ"] = "project.read";
    ACL["PROJECT_CREATE"] = "project.create";
    // Plugin ACL
    ACL["PLUGIN_INSTALL"] = "plugin.install";
})(ACL = exports.ACL || (exports.ACL = {}));
