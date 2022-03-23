import { Axios } from 'axios';
import { FileUtility } from '../file-utility';
export declare type SandboxLib = Partial<{
    axios: Axios;
    _: any;
    FileUtility: FileUtility;
}>;
