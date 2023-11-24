import { AxiosStatic } from "axios";
import * as _ from "lodash";
import { ConstructableWithConfig } from "..";
export declare type SandboxLib<F = any, C = any> = {
    axios: AxiosStatic;
    _: typeof _;
    qs: any;
    FormData: any;
    crypto?: any;
    FileUtility: ConstructableWithConfig<F, C>;
};
