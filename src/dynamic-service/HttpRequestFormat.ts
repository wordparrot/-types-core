export enum HttpRequestFormatMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
  HEAD = "head",
  OPTIONS = "options",
}

export interface HttpRequestFormat {
  url?: string;
  method?: HttpRequestFormatMethod;
  headers?: Record<string, unknown>;
  params: Record<string, unknown>;
  query: Record<string, unknown>;
  body: Record<string, unknown>;
}

export const isValidHttpRequestFormat = (json): boolean => {
  if (typeof json !== "object") {
    return false;
  }
  if (typeof json.params !== "object") {
    return false;
  }
  if (typeof json.query !== "object") {
    return false;
  }
  if (typeof json.body !== "object") {
    return false;
  }
  return true;
};

export const filterHttpRequests = <T>(jsonArray: T[]): T[] => {
  if (!Array.isArray(jsonArray)) {
    return jsonArray;
  }
  return jsonArray.filter(isValidHttpRequestFormat);
};
