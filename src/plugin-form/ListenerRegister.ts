import { ListenerReturnFunction, PluginModuleListenerFactory } from "..";

export interface ListenerRegisterItem<T = string> {
  provider: T;
  methods: ListenerReturnFunction;
}

export type ListenerRegister = (
  listenerRegisterItemArray: ListenerRegisterItem[]
) => PluginModuleListenerFactory;
