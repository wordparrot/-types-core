import { ActionReturnFunction, PluginModuleActionFactory } from "..";
export interface ActionRegisterItem<T = string> {
    provider: T;
    methods: {
        main: ActionReturnFunction;
    };
}
export declare type ActionRegister = <T = string>(actionRegisterItemArray: ActionRegisterItem<T>[]) => PluginModuleActionFactory;
