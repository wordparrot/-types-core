import { ListenerReturnFunction } from "..";

export interface ListenerReturnMethods {
  main: ListenerReturnFunction;
}

export interface ListenerRegisterItem<T = string> {
  provider: T;
  methods: ListenerReturnMethods;
}

export type ListenerRegister = <T = string>(
  listenerRegisterItemArray: ListenerRegisterItem<T>[]
) => Record<string, ListenerRegisterItem<T>>;
