import { User } from "..";
import { ACL } from "..";

export type RoleType = "administrator" | "editor" | "subscriber";

export interface Role {
  id: string;
  title: string;
  content: string;
  type: RoleType;
  order: number;
  acl: ACL[];

  users: User[];

  createdAt: string;
  updatedAt: string;
}

export type AdministratorRoleACL = [ACL.ADMIN_SUPER];

export interface AdministratorRole extends Role {
  acl: AdministratorRoleACL;
}

export type EditorRoleACL = [
  ACL.DASHBOARD_READ,
  ACL.PROJECT_CREATE,
  ACL.PROJECT_READ,
  ACL.PLUGIN_INSTALL
];

export interface EditorRole extends Role {
  acl: EditorRoleACL;
}

export type SubscriberRoleACL = [ACL.PROJECT_READ];

export interface SubscriberRole extends Role {
  acl: SubscriberRoleACL;
}
