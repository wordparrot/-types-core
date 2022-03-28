import { DynamicServiceBody, ActionReturnValue } from "..";
export interface AbstractDynamicServiceInterface<T = DynamicServiceBody> {
    requiresSite?: boolean;
    requiresThread?: boolean;
    main: (config: T) => ActionReturnValue;
}