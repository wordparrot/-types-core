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
export declare type ListenerRegister<T> = Record<string, ListenerRegisterItem<T>>;
export declare type ListenerRegisterFactory = <T>(ListenerRegisterItemArray: ListenerRegisterItem<T>[]) => ListenerRegister<T>;
export declare type ListenerFactory<T = any> = ListenerRegister<T>;
