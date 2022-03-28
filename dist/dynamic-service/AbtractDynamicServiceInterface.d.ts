import { ActionReturnValue, ListenerReturnValue } from "..";
export interface AbstractDynamicServiceInterface {
    requiresSite?: boolean;
    requiresThread?: boolean;
    main: (config: unknown) => ActionReturnValue;
}
export interface AbstractDynamicServiceInterfaceListener {
    requiresSite?: boolean;
    requiresThread?: boolean;
    main: (config: unknown) => ListenerReturnValue;
}
