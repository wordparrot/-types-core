import { ActionReturnFunction } from "..";
export declare type ActionReturnMethods = {
    main: ActionReturnFunction;
};
export interface ActionRegisterItem<T = string> {
    provider: T;
    methods: ActionReturnMethods;
}
export declare type ActionRegister = <T = string>(actionRegisterItemArray: ActionRegisterItem<T>[]) => Record<string, ActionReturnMethods>;
