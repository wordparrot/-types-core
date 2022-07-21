import { ActionReturnFunction } from "..";

export type ActionReturnMethods = {
  main: ActionReturnFunction;
};

export interface ActionRegisterItem<T = string> {
  provider: T;
  methods: ActionReturnMethods;
}

export type ActionRegister = <T = string>(
  actionRegisterItemArray: ActionRegisterItem<T>[]
) => Record<string, ActionReturnMethods>;
