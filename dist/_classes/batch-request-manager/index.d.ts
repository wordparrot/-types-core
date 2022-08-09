interface BatchRequestManagerResults<RequestBody = any> {
    numRequests: number;
    attempts: number;
    completed: number;
    error: number;
    resolvedData: RequestBody[];
    errorData: RequestBody[];
    unsentData: RequestBody[];
}
declare enum BatchRequestMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete"
}
interface BatchRequestManagerConfig<RequestBody, Options> {
    method: BatchRequestMethod;
    axios: any;
    requests: [string, RequestBody, Options][];
    chunkSize: number;
    stopOnError: boolean;
}
declare class BatchRequestManager<RequestBody = any, Options = any> {
    private axios;
    private method;
    private requests;
    private chunkSize;
    private stopOnError;
    private resultsArray;
    constructor(config: BatchRequestManagerConfig<RequestBody, Options>);
    send(): Promise<BatchRequestManagerResults<RequestBody>>;
    private execute;
    mostRecentResults(): BatchRequestManagerResults<RequestBody> | null;
}
export default BatchRequestManager;
