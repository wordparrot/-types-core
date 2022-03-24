import { DynamicServiceBody, ActionReturnValue } from ".."

export interface AbstractDynamicServiceInterface {
    requiresSite?: boolean
    requiresThread?: boolean
    main: (config: DynamicServiceBody) => ActionReturnValue
}