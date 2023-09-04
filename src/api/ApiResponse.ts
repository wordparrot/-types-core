export interface ApiResponse<T> {
  result: boolean;
  data: T;
  message: string;
}

export type ServerApiResponse<T> = ApiResponse<T>;
