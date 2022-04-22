import { Axios } from 'axios';
import { FileUtility, FileUtilityConfig } from '..';
import { ConstructableWithConfig } from '..';
export declare type SandboxLib = {
    axios: Axios;
    _: any;
    FileUtility: ConstructableWithConfig<FileUtilityConfig, FileUtility>;
};
