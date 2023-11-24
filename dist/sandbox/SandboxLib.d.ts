import axios from 'axios';
import * as _ from 'lodash';
import { ConstructableWithConfig } from "..";
export declare type SandboxLib<F = any, C = any, A = typeof axios, L = typeof _> = {
    axios: A;
    _: L;
    qs: any;
    FormData: any;
    crypto?: any;
    FileUtility: ConstructableWithConfig<F, C>;
};
