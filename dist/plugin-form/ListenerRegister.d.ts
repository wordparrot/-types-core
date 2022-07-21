import { ListenerReturnFunction, PluginModuleListenerFactory } from "..";
export interface ListenerRegisterItem<T = string> {
    provider: T;
    methods: {
        main: ListenerReturnFunction;
    };
}
export declare type ListenerRegister = (listenerRegisterItemArray: ListenerRegisterItem[]) => PluginModuleListenerFactory;
