import { ActionReturnFunction } from "..";
export declare type ActionRegisterMethods = {
    main: ActionReturnFunction;
};
export interface ActionRegisterValues {
    methods: ActionRegisterMethods;
    isBatchProcess?: boolean;
}
export interface ActionRegisterItem<T> extends ActionRegisterValues {
    provider: T;
}
export declare type ActionRegister<T> = Record<string, ActionRegisterItem<T>>;
export declare type ActionRegisterFactory<T> = (actionRegisterItemArray: ActionRegisterItem<T>[]) => ActionRegister<T>;
export declare type ActionFactory<T = any> = () => ActionRegister<T>;
