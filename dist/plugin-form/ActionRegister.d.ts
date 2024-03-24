import { ActionReturnFunction } from "..";
export type ActionRegisterMethods = {
    main: ActionReturnFunction;
};
export interface ActionRegisterValues {
    methods: ActionRegisterMethods;
    isBatchProcess?: boolean;
}
export interface ActionRegisterItem<T> extends ActionRegisterValues {
    provider: T;
}
export type ActionRegister<T> = Record<string, ActionRegisterItem<T>>;
export type ActionRegisterFactory<T> = (actionRegisterItemArray: ActionRegisterItem<T>[]) => ActionRegister<T>;
export type ActionFactory<T = any> = () => ActionRegister<T>;
