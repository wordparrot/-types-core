export interface ApiResponse<T> {
    result: boolean;
    data: T;
    message: string;
}
export declare type ServerApiResponse<T> = ApiResponse<T>;
