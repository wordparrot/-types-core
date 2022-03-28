import { DynamicServiceBody, ActionReturnValue, ListenerReturnValue } from "..";
export interface AbstractDynamicServiceInterface<T = DynamicServiceBody> {
    requiresSite?: boolean;
    requiresThread?: boolean;
    main: (config: T) => ListenerReturnValue | ActionReturnValue;
}
