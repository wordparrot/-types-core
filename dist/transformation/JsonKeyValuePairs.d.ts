export type JsonValue = string | number | Object | (string | number | Object)[];
export interface JsonKeyValuePairs {
    [name: string]: JsonValue;
}
