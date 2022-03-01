import { DnsChange, Site } from ".";
export interface Dns {
    id: string;
    isSubdomain: boolean;
    domainPending?: string;
    isSubdomainPending?: boolean;
    isApprovalPending?: boolean;
    txtChallengeKeyPending?: string;
    txtChallengeValuePending?: string;
    migrationRequestedAt?: string;
    assignedIP?: string;
    changes?: DnsChange[];
    site?: Site;
}
