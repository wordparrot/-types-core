export interface Webhook {
    id: string;
    provider: string;
    active: boolean;
    methods: string[];
    route: string;
    siteId: string;
    createdAt: string;
    updatedAt: string;
}
