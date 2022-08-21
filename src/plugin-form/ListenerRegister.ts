import { ListenerReturnFunction } from "..";

export interface ListenerRegisterMethods {
  main: ListenerReturnFunction;
}

export interface ListenerRegisterValues {
  methods: ListenerRegisterMethods;
}

export interface ListenerRegisterItem<T = string>
  extends ListenerRegisterValues {
  provider: T;
}

export type ListenerRegister = <T = string>(
  listenerRegisterItemArray: ListenerRegisterItem<T>[]
) => Record<string, ListenerRegisterValues>;
