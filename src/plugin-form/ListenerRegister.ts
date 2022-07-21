import { ListenerReturnFunction, PluginModuleListenerFactory } from "..";

export interface ListenerRegisterItem<T = string> {
  provider: T;
  methods: {
    main: ListenerReturnFunction;
  };
}

export type ListenerRegister<T = string> = (
  listenerRegisterItemArray: ListenerRegisterItem<T>[]
) => PluginModuleListenerFactory;
