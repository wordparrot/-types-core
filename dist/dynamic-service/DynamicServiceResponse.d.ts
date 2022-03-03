export interface DynamicServiceResponse {
    result: boolean;
    data: {
        name?: string;
        type?: string;
        message?: string;
        statusCode?: number;
        url?: string;
        error?: any;
        output?: any;
        createdAt?: string;
    };
}
