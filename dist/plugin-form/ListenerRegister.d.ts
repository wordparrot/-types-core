import { ListenerReturnFunction } from "..";
export interface ListenerRegisterMethods {
    main: ListenerReturnFunction;
}
export interface ListenerRegisterValues {
    methods: ListenerRegisterMethods;
}
export interface ListenerRegisterItem<T = string> extends ListenerRegisterValues {
    provider: T;
}
export type ListenerRegister<T> = Record<string, ListenerRegisterItem<T>>;
export type ListenerRegisterFactory = <T>(ListenerRegisterItemArray: ListenerRegisterItem<T>[]) => ListenerRegister<T>;
export type ListenerFactory<T = any> = () => ListenerRegister<T>;
