import { ConstructableWithConfig } from "..";
export declare type SandboxLib<A = any, F = any, C = any> = {
    axios: A;
    _: any;
    qs: any;
    FormData: any;
    crypto?: any;
    FileUtility: ConstructableWithConfig<F, C>;
};
