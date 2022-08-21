import { ActionReturnFunction } from "..";

export type ActionRegisterMethods = {
  main: ActionReturnFunction;
};

export interface ActionRegisterValues {
  methods: ActionRegisterMethods;
  isBatchProcess?: boolean;
}

export interface ActionRegisterItem<T = string> extends ActionRegisterValues {
  provider: T;
}

export type ActionRegister = <T = string>(
  actionRegisterItemArray: ActionRegisterItem<T>[]
) => Record<string, ActionRegisterValues>;
