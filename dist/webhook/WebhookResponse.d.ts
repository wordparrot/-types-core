export interface WebhookResponse {
    statusCode?: number;
    params?: Record<string, any>;
    headers?: Record<string, any>;
    cookies?: Record<string, any>;
    attachment?: {
        filename: string;
        buffer: any;
    };
    body?: any;
    clearCookie?: boolean;
    sendStatus?: boolean;
    redirect?: string;
}
