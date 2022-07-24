export declare enum HttpRequestFormatMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete",
    HEAD = "head",
    OPTIONS = "options"
}
export interface HttpRequestFormat {
    url?: string;
    method?: HttpRequestFormatMethod;
    headers?: Record<string, unknown>;
    params: Record<string, unknown>;
    query: Record<string, unknown>;
    body: Record<string, unknown>;
}
export declare const isValidHttpRequestFormat: (json: any) => boolean;
export declare const filterHttpRequests: <T>(jsonArray: T[]) => T[];
