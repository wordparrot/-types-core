import { ActionReturnFunction, PluginModuleActionFactory } from "..";
export interface ActionRegisterItem<T = string> {
    provider: T;
    methods: ActionReturnFunction;
}
export declare type ActionRegister = (actionsRegisterItemArray: ActionRegisterItem[]) => PluginModuleActionFactory;
