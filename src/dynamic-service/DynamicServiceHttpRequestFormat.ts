export enum DynamicServiceHttpRequestFormatMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
  HEAD = "head",
  OPTIONS = "options",
}

export interface DynamicServiceHttpRequestFormat {
  url?: string;
  method?: DynamicServiceHttpRequestFormatMethod;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
}
