import { Axios } from 'axios';
import { FileUtility } from '..';
export declare type SandboxLib = Partial<{
    axios: Axios;
    _: any;
    FileUtility: FileUtility;
}>;
