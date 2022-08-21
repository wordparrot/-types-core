import { ActionReturnFunction } from "..";
export declare type ActionRegisterMethods = {
    main: ActionReturnFunction;
};
export interface ActionRegisterValues {
    methods: ActionRegisterMethods;
    isBatchProcess?: boolean;
}
export interface ActionRegisterItem<T = string> extends ActionRegisterValues {
    provider: T;
}
export declare type ActionRegister = <T = string>(actionRegisterItemArray: ActionRegisterItem<T>[]) => Record<string, ActionRegisterValues>;
